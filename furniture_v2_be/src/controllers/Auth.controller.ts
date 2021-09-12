import User from "../models/UserSchema";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const message = "Username or password is wrong!";
    try {
        const existingUser: any = await User.findOne({ username });

        //User does not exist
        if (!existingUser) {
            res.status(400).json({ message });
            return;
        }
        const comparePassword = await bcrypt.compare(
            password,
            existingUser.password
        );

        //Wrong Password
        if (!comparePassword) {
            res.status(400).json({ message });
            return;
        }

        //Sign JWT
        const token = jwt.sign(
            { ...existingUser._doc, password: undefined },
            process.env.SECRET_JWT,
            { expiresIn: "1 day" }
        );

        res.status(200).json({
            user: {
                ...existingUser._doc,
                password: undefined,
            },
            accessToken: token,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const Register = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        req.body.password = await bcrypt.hash(body.password, 10);
        const user = await User.create(body);

        res.status(201).json(user);
    } catch (error) {
        if (error.name === "ValidationError") {
            let path = Object.keys(error.errors);

            res.status(400).json({ message: `${path[0]} is required` });
            return;
        }
        res.status(400).json({ message: error.message });
    }
};

export default {
    Login,
    Register,
};
