import { generateData } from "./interface";
import FurnitureRequest from "./Concreate/Request/Furniture/product";
import FurnitureResponse from "./Concreate/Response/Furniture/product";
import FurnitureSchema from '../models/Product/furniture';

export class ProductFactory {
    public static createProduct(data: any, type: string): generateData {
        switch(type) {
            case "furniture": return new FurnitureRequest(data)
            default : return new FurnitureRequest(data)
        }
    }

    public static getProduct(data: any, type: string): generateData {
        switch(type) {
            case "furniture": return new FurnitureResponse(data)
            default : return new FurnitureResponse(data)
        }
    }

    public static createSchema(data ,type) {
        switch(type) {
            case "furniture": {
                return new FurnitureSchema(data);
            }
            default: {
                return new FurnitureSchema(data);
            }
        }
    }
    
    public static getSchema(type) {
        switch(type) {
            case "furniture": return FurnitureSchema
            default: return FurnitureSchema
        }
    }
}