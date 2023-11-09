import { Request, Response, NextFunction } from 'express';
import { Validator } from '../../helpers/yupValidators';


export class validation {

    private stringSchema!: Validator

    constructor() {
        this.stringSchema = new Validator()
    }

    registerValidation = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email,password, firstName, lastName, phone } = req.body

            await this.stringSchema.emailSchema.validate(email)
            await this.stringSchema.passwordSchema.validate(password)
            await this.stringSchema.strinSchema.validate(firstName)
            await this.stringSchema.strinSchema.validate(lastName)
            await this.stringSchema.phoneNumberSchema.validate(phone)

            next();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
                res.status(422).json({ error: error.message, message: 'Validation error' });
            } 
            else res.status(422).json({ error, message: 'Validation error' });
        }
    }

    loginValidation = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email,password } = req.body

            await this.stringSchema.emailSchema.validate(email)
            await this.stringSchema.passwordSchema.validate(password)

            next();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
                res.status(422).json({ error: error.message, message: 'Validation error' });
            } 
            else res.status(422).json({ error, message: 'Validation error' });
        }
    }

    productValidation = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email,password, firstName, lastName, phone } = req.body

            await this.stringSchema.emailSchema.validate(email)
            await this.stringSchema.passwordSchema.validate(password)
            await this.stringSchema.strinSchema.validate(firstName)
            await this.stringSchema.strinSchema.validate(lastName)
            await this.stringSchema.phoneNumberSchema.validate(phone)

            next();
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
                res.status(422).json({ error: error.message, message: 'Validation error' });
            } else res.status(422).json({ error, message: 'Validation error' });
        }
    }
} 
