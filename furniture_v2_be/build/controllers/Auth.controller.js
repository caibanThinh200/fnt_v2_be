"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserSchema_1 = __importDefault(require("../models/UserSchema"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Login = async (req, res) => {
    const { username, password } = req.body;
    const message = "Username or password is wrong!";
    try {
        const existingUser = await UserSchema_1.default.findOne({ username });
        //User does not exist
        if (!existingUser) {
            res.status(400).json({ message });
            return;
        }
        const comparePassword = await bcrypt_1.default.compare(password, existingUser.password);
        //Wrong Password
        if (!comparePassword) {
            res.status(400).json({ message });
            return;
        }
        //Sign JWT
        const token = jsonwebtoken_1.default.sign({ ...existingUser._doc, password: undefined }, process.env.SECRET_JWT, { expiresIn: "1 day" });
        res.status(200).json({
            user: {
                ...existingUser._doc,
                password: undefined,
            },
            accessToken: token,
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const Register = async (req, res) => {
    const { body } = req;
    try {
        req.body.password = await bcrypt_1.default.hash(body.password, 10);
        const user = await UserSchema_1.default.create(body);
        res.status(201).json(user);
    }
    catch (error) {
        if (error.name === "ValidationError") {
            let path = Object.keys(error.errors);
            res.status(400).json({ message: `${path[0]} is required` });
            return;
        }
        res.status(400).json({ message: error.message });
    }
};
exports.default = {
    Login,
    Register,
};
