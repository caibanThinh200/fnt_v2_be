import logger from '../config/logger';
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

    static getActionResult(value: string, status: any) {
        return value + TAG_DEFINE.RESULT[status === 200 ? 200 : 500]
    }
    
    static generateJSONObj(value: any) {
        return JSON.parse(JSON.stringify(value));
    }

    static getStoreSchema(value, store) {
        return `${store} ${value}`
    }
}

export default CommonFunction;