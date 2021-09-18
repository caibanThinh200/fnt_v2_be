"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_controller_1 = __importDefault(require("../Controller/Auth.controller"));
const url_1 = __importDefault(require("../Constant/url"));
const router = (0, express_1.default)();
router.post(url_1.default.AUTH.login, Auth_controller_1.default.Login);
router.post(url_1.default.AUTH.register, Auth_controller_1.default.Register);
router.get(url_1.default.APP.params.replace("params", "id"), Auth_controller_1.default.GetDetailUserController);
router.put(url_1.default.APP.params.replace("params", "id"), Auth_controller_1.default.UpdateUserController);
exports.default = router;
