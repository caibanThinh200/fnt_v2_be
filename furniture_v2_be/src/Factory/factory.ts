import { Product } from "./interface";
import FurnitureRequest from "./Concreate/Request/Furniture/product";
import FurnitureResponse from "./Concreate/Response/Furniture/product";

export class ProductFactory {
    public static createProduct(data: any, type: string): Product {
        switch(type) {
            case "furniture": return new FurnitureRequest(data)
            default : return new FurnitureRequest(data)
        }
    }

    public static getProduct(data: any, type: string): Product {
        switch(type) {
            case "furniture": return new FurnitureResponse(data)
            default : return new FurnitureResponse(data)
        }
    }

}