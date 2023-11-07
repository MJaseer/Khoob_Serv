import { Request, Response, NextFunction } from 'express';
import { ValidateFn } from 'mongoose';
import * as yup from 'yup';
import { Validator } from '../../helpers/yupValidators';


export class validationMiddleware{
    private passwordSchema!:Validator

    constructor(){
        this.passwordSchema = new Validator()
    }

    validationMiddleware = () => {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                const password = req.body.password
                await this.passwordSchema.stringSchema.validate(password)
                next();
            } catch (error) {
                return res.status(422).json({error,message:'Validation error'});
            }
        };
    };
} 

