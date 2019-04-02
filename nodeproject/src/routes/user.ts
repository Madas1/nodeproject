import Express, { Request, Response, NextFunction } from 'express';
import { login } from '../handlers';

const UserRouter = Express.Router();

interface UserLogin {
    username: String,
    password: String
}

UserRouter.post("/login",(req, res, next) => {

    let validation = validateParameters(req.body);
    if(validation.status){ next() }
    else{
        res.status(400);
        res.json(validation);
    }

},login);
UserRouter.post("/signup",()=>{});
UserRouter.patch("/forgotpassword",()=>{});
UserRouter.patch("/getprofile",() => {},()=>{});

const validateParameters = (body: UserLogin) => {
    let status = false;
    let statusmessage = 'Missing following parameters';
    
    if(body.username !== undefined) status = true 
    else {
        status = false;
        statusmessage = `${statusmessage} Username `
    };

    if(body.password !== undefined) status = true 
    else{
        status = false
        statusmessage = `${statusmessage} Password`
    };

    
    return ({ status, statusmessage })
    
    
}


export default UserRouter;