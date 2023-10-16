import express from "express";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import cors from 'cors'

import connectDataBase from "./config/database/mongo";
import userRoute from "./router/user/user-router";

const app = express()

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:4200']
    })
);
    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))

connectDataBase()

app.use("/api", userRoute)

const port = process.env.PORT

app.listen(port, () => {
    console.log(`The server start at running on port ${port}`);
});