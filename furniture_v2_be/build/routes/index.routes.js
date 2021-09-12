"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Auth_routes_1 = __importDefault(require("./Auth.routes"));
exports.default = (app) => {
    app.use('/auth', Auth_routes_1.default);
};
