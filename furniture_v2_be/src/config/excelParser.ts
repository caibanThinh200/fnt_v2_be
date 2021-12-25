import exceltoJSON from 'convert-excel-to-json';
import CommonFunction from '../Utils/function';
import path from "path";

export default class ExcelGenerator {
    public data: any;
    public instance: ExcelGenerator
    constructor(data) {
        // if(!this.instance) {
        //     this.instance = new ExcelGenerator(data);
        // }
        this.data = this.setExcelData(data) || {};
    }

    private setExcelData(data: any) {
        return exceltoJSON({
            sourceFile: `${path.join(__dirname, "../")}/${data?.path || ""}`,
            header: {
                rows: 1
            },
            columnToKey: CommonFunction.getAlphabetObject(data?.objects)
        })
    }
}