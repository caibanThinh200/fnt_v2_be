import { Response } from 'express';
import logger from '../Config/logger';
import TAG_DEFINE from '../Constant/define';

class CommonFunction {
    static instance: CommonFunction;
    constructor() {
        if(!CommonFunction.instance) {
            CommonFunction.instance = this;
        }
        return CommonFunction.instance;
    }

    // functions
    static formatInt(numberParams: any, defaultNum:number = 0) {
        return isNaN(numberParams) ? defaultNum : (numberParams);
    }

    static customizeLogger(value: any, colors: any) {
        return logger.info(value[colors]);
    }

    static capitalizeFirstLetter(value: string) {
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }

    static getKeyByValue(object: any, value: string) {
        return Object.keys(object).find((key: any) => object[key] === value);
    }

    static getActionResult(result: any, code: number, error:any = null, value?: string) {
        return {
            code,
            result: result === null ? value + TAG_DEFINE.RESULT[status === 200 ? 200 : 500] : result,
            error
        }
    }

    static generateJSONObj(value: any) {
        return JSON.parse(JSON.stringify(value));
    }

    static getStoreSchema(value, store) {
        return `${store} ${value}`
    }

    static checkSpicialCharacter(value: string) {
        return value.match(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/);
    }

    static checkPhoneNumberValue(value: string) {
        return value.match(/^\d{11}$/);
    }

    static checkEmailValue(value: string) {
        return value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

    static hasNumberInString(value: string) {
        return /\d/.test(value);
    }

    static responseBadRequest(message: string, res: Response) {
        res.json({
            status: TAG_DEFINE.STATUS.failed,
            result: null,
            error: {
                code: 400,
                message: message
            }
        })
    }

    static responseAuthorizeRequest(message: string, res: Response) {
        res.json({
            status: TAG_DEFINE.STATUS.failed,
            result: null,
            error: {
                code: 501,
                message: message
            }
        })
    }
}

export default CommonFunction;