"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = require("http");
var function_1 = __importDefault(require("../Utils/function"));
var logger_1 = __importDefault(require("../config/logger"));
var define_1 = __importDefault(require("../Constant/define"));
var mongodb_1 = __importDefault(require("../config/mongodb"));
(0, mongodb_1.default)().then(function (err) {
    if (err) {
        logger_1.default.error("DB has fail", err);
    }
    else {
        logger_1.default.info("DB connected");
    }
});
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send(define_1.default.SERVICE.start);
});
var PORT = typeof (process.env.PORT_SERVER) !== "number" ? function_1.default.formatInt(process.env.PORT_SERVER) : process.env.PORT_SERVER;
var server = (0, http_1.createServer)(app);
server.listen(PORT, function () { return logger_1.default.info(define_1.default.SERVER.start.replace("%s", PORT.toString())); });
exports.default = app;
