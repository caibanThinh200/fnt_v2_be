import { Product } from "../../Factory/interface";
import logger from '../../config/logger';

export abstract class ProductModel implements Product {
    private _id: any;
    private name: any;
    private price: any;
    private type: any;

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any): void {
        // this._id = data._id || "";
        this.name = data.name || "";
        this.type = data.type || "";
        this.price = data.price || 0;
    }
}