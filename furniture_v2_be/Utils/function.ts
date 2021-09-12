class CommonFunction {
    static instance: CommonFunction;
    constructor() {
        if(!CommonFunction.instance) {
            CommonFunction.instance = this;
        }
        return CommonFunction.instance;
    }

    //functions
    static formatInt(number: any, defaultNum:number = 0) {
        return isNaN(number) ? defaultNum : (number);
    }

    static customizeLogger(value: any, colors: any) {
        return console.log(value[colors]);
    }
}

export default CommonFunction;