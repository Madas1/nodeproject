import jsonwebtoken from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface UserLogin {
    username: String,
    password: String
}
interface UserLoginResponse{
    status: Number,
    data?: {
        userDetails: UserLogin,
        authToken: String
    },
    message: String
}

const key = 'MySuperSecretKey';

export const validateCredentials = (username: String, password: String):UserLoginResponse => {
       
    let response: UserLoginResponse = {
        status: 0,
        message: ''
    };
    
    if(username === 'droidmakk' && password === 'password123'){
        response.data = {
            userDetails: {
             name: 'Afroze',
             gender: 'Male'
            },
            authToken: jsonwebtoken.sign({ username }, key, {
                expiresIn: "30sec",
            })
        };
        response.message = 'OK'
        response.status = 200
    } else {
         response.message = 'Unauthorized'
         response.status = 401
    }

    return response;
 }

 export const authenticateRequest = (req: Request, res: Response, next: NextFunction) => {
     
    try {
        let token = req.header('token') || '';
        let jwtData = jsonwebtoken.verify(token,key);
        next();
    } catch (error) {
        res.status(403);
        res.json({
            status: 403,
            message: 'Unauthorized - Token expired'
        })
    }

 }