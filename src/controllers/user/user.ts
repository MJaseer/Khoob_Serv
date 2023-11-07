import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userSchema, { IUser } from "../../models/user";
import { Finds } from "../../repositeries/common/find";
import { create } from "../../repositeries/common/create";
dotenv.config();

export class User{
    
    private findService!:Finds

    constructor() { this.findService = new Finds()}

    userRegister = async (req: Request, res: Response) => {
        try {
            const { firstName, phone, lastName, email, password }: IUser = req.body;
            const existingUser = await this.findService.findOne('email', email, userSchema,'register');
            if (existingUser) return res.status(400).json({ error: "Email already exists" });
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const userData = { firstName, lastName, email, password: hashedPassword, phone }
            const newUser = await create('user', userData, userSchema)
            const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY as string, {
                expiresIn: "7d",
            });
            res.status(201).json({ user: newUser.email, token: `Bearer ${token}` });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to register user" });
        }
    }

    userLogin = async (req: Request, res: Response) => {
        console.log("on controller")
        const { email, password }: IUser = req.body;
        try {
            const existingUser = await this.findService.findOne('email', email, userSchema);
            if (!existingUser) return res.status(400).json({ error: "User does not exist" });
            const passwordMatch = await bcrypt.compare(password, existingUser.password);
            if (!passwordMatch) return res.status(401).json({ error: "Incorrect password" });
    
            const token = jwt.sign(
                { userId: existingUser._id },
                process.env.SECRET_KEY as string,
                {
                    expiresIn: "7d",
                }
            );
    
            res.status(200).json({ user: existingUser.email, token: `Bearer ${token}` });
        } catch (error) {
            res.status(500).json({ error: "Failed to login User" });
        }
    };

}
