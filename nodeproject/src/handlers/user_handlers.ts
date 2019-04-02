import { Request, Response, NextFunction } from 'express';
import { validateCredentials } from '../middleware';

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

export const login = (req: Request, res: Response, next: NextFunction) => {
    let body: UserLogin = req.body;
    
    
    // return a token jwt token
    let responseObject: UserLoginResponse = validateCredentials(body.username, body.password);
    res.statusCode = responseObject.status == 200 ? 200 : 401;
    res.json(responseObject)
}


