import logger from '../config/logger';
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
}

export default CommonFunction;