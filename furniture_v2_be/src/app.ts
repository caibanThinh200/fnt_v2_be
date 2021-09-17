import express, {Request, Response} from "express";
import http, { createServer, IncomingMessage, Server, ServerResponse } from "http";
import dotenv from "dotenv";
import CommonUtils from "./Utils/function";
import logger from './config/logger';
import colors, { red } from "colors";
import TAG_DEFINE from './Constant/define';
import dataConfig from "./config/mongodb";
import PATH from './Constant/url';
import bodyParser from "body-parser";
import router from './Routes/index.routes'

dataConfig().then((err: any) => {
    if(err) {
        logger.error(TAG_DEFINE.RESULT.DATABASE.connect.failed, err)
    } else {
        logger.info(TAG_DEFINE.RESULT.DATABASE.connect.success);
    }
});

const app = express();

app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

router(app);

app.get(PATH.APP.start, (req: Request, res: Response) => {
    res.send(TAG_DEFINE.SERVICE.start);
});

app.get(PATH.APP[404], (req: Request, res: Response) => {
    res.send(TAG_DEFINE.CODE[404].replace("%s", CommonUtils.capitalizeFirstLetter("API")));
});

const PORT : number = typeof(process.env.PORT_SERVER) !== "number" ? CommonUtils.formatInt(process.env.PORT_SERVER) : process.env.PORT_SERVER;
const server: Server = createServer(app);
server.listen(PORT, () => logger.info(TAG_DEFINE.SERVER.start.replace("%s", PORT.toString())));

export default app;