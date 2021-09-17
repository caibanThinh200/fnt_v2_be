import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken'

export const VerifyToken = (req: Request, res: Response, next: NextFunction) => {
    if (req.path.includes('auth')){
        console.log('next')
        return next();
    }

    const token = req.headers['authorization'].split(' ')[1];

    jwt.verify(token, process.env.SECRET_JWT, (err, data) => {
        if (err){
            res.status(400).json({message: err.message});
            return;
        }else{
            return next();
        }
    })
}