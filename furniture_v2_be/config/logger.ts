import winston, { createLogger, format, transports, config } from "winston";
import moment from "moment";
import { Format } from "logform";
import colors from "colors";
colors.enable();

const typeMessage = (value: any) => {
  switch(value.level) {
    case "error": return "Error";
    case "warn": return "Warning";
    default: return "Notification"
  }
}

const loggingMessage = (value: any): string => {
  const colorMessage: string = colors.black(`(${typeMessage(value)}) Message logged in ${moment(value.timestamp).format("DD-MM-YYYY hh:mm:ss")} \n- ${value.message} - `);
  if(value.level === `warn`) {
    return colors.bgYellow(colorMessage);
  }
  if(value.level === "error") {
    return colors.bgRed(colorMessage);
  }
  else return colors.bgGreen(colorMessage);
}

const logger: any = createLogger({
    format: winston.format.combine(
      winston.format.printf(info => loggingMessage(info))
    ),
    transports: [
        new transports.Console()
      ]
});

export default logger;
