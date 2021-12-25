import express, {Request, Response} from "express";
import http, { createServer, IncomingMessage, Server, ServerResponse } from "http";
import dotenv from "dotenv";
import CommonUtils from "./Utils/function";
import logger from './Config/logger';
import colors, { red } from "colors";
import TAG_DEFINE from './Constant/define';
import dataConfig from "./Config/mongodb";
import PATH from './Constant/url';
import bodyParser from "body-parser";
import router from './Routes/index.routes'
import cors from "cors"

const app = express();

dataConfig.getInstance();
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors());

router(app);
app.use(PATH.APP.upload, express.static("src/UploadFiles"));

app.get(PATH.APP.start, (req: Request, res: Response) => {
    res.send(TAG_DEFINE.SERVICE.start);
});

app.get(PATH.APP[404], (req: Request, res: Response) => {
    res.send(TAG_DEFINE.ERROR[404].replace("%s", CommonUtils.capitalizeFirstLetter("API")));
});

const PORT : number = typeof(process.env.PORT) !== "number" ? CommonUtils.formatInt(process.env.PORT) : process.env.PORT;
const server: Server = createServer(app);
server.listen(PORT, () => logger.info(TAG_DEFINE.SERVER.start.replace("%s", PORT.toString())));

export default app;