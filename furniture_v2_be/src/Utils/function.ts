import logger from "../config/logger";
import TAG_DEFINE from "../Constant/define";
import bcrypt from "bcrypt";

class CommonFunction {
    static instance: CommonFunction;
    constructor() {
        if (!CommonFunction.instance) {
            CommonFunction.instance = this;
        }
        return CommonFunction.instance;
    }

    // functions
    static formatInt(numberParams: any, defaultNum: number = 0) {
        return isNaN(numberParams) ? defaultNum : numberParams;
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

    static getActionResult(value: string, status: any) {
        return value + TAG_DEFINE.RESULT[status === 200 ? 200 : 500];
    }

    static generateJSONObj(value: any) {
        return JSON.parse(JSON.stringify(value));
    }

    static getStoreSchema(value, store) {
        return `${store} ${value}`;
    }

    static async hashPassword(document) {
        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(document.password, salt);

        document.password = hash;
    }

    static async validateGender(document) {
        const gender = parseInt(document.gender) || 0;
        let result = '';
        switch (gender) {
            case 0:
                result = "Male";
            case 1:
                result = "Female";
            case 2:
                result = "Not sure";
            default:
                result = "Male";
        }

        document.gender = result;
    }

    static async UpdateTime(document) {
        const now = Date.now();

        document.updated_at = now;
    }
}

export default CommonFunction;
