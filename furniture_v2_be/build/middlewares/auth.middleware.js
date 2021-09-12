"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const VerifyToken = (req, res, next) => {
    if (req.path.includes('auth')) {
        console.log('next');
        return next();
    }
    const token = req.headers['authorization'].split(' ')[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_JWT, (err, data) => {
        if (err) {
            res.status(400).json({ message: err.message });
            return;
        }
        else {
            return next();
        }
    });
};
exports.VerifyToken = VerifyToken;
