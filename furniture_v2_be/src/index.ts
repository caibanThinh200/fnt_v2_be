import express, {Request, Response} from "express";
import http, { createServer, IncomingMessage, Server, ServerResponse } from "http";
import dotenv from "dotenv";
import CommonUtils from "./Utils/function";
import logger from './config/logger';
import colors, { red } from "colors";
import TAG_DEFINE from './Constant/define';
import db from "./config/mongodb";
import router from './routes/index.routes'
import bodyParser from 'body-parser'
import {VerifyToken} from './middlewares/auth.middleware';

db().then((err: any) => {
    if(err) {
        logger.error("DB has fail", err)
    } else {
        logger.info("DB connected");
    }
})

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
    res.send(TAG_DEFINE.SERVICE.start);
})

app.use(VerifyToken);
router(app);

const PORT : number = typeof(process.env.PORT_SERVER) !== "number" ? CommonUtils.formatInt(process.env.PORT_SERVER) : process.env.PORT_SERVER;
const server: Server = createServer(app)
server.listen(PORT, () => logger.info(TAG_DEFINE.SERVER.start.replace("%s", PORT.toString())));

export default app;


