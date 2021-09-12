import express, {Request, Response} from "express";
import http, { createServer, IncomingMessage, Server, ServerResponse } from "http";
import dotenv from "dotenv";
import CommonUtils from "../Utils/function";
import logger from '../config/logger';
import colors, { red } from "colors";
import TAG_DEFINE from '../Constant/define';
import db from "../config/mongodb";

db().then((err: any) => {
    if(err) {
        logger.error("DB has fail", err)
    } else {
        logger.info("DB connected");
    }
})

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send(TAG_DEFINE.SERVICE.start);
})

const PORT : number = typeof(process.env.PORT_SERVER) !== "number" ? CommonUtils.formatInt(process.env.PORT_SERVER) : process.env.PORT_SERVER; 
const server: Server = createServer(app)
server.listen(PORT, () => logger.info(TAG_DEFINE.SERVER.start.replace("%s", PORT.toString())));

export default app;


