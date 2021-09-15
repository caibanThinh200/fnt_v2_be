import { Product } from "./interface";

import FurnitureRequest from "./Concreate/Request/Furniture/product";
import FurnitureResponse from "./Concreate/Response/Furniture/product";

import AAPetRequest from "./Concreate/Request/AAPet/product";
import AAPetResponse from "./Concreate/Response/AAPet/product";
import TAG_DEFINE from "../Constant/define";

export class ProductFactory {
    public static createProduct(data: any, type: string): Product {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureRequest(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetRequest(data);
            default:
                return new FurnitureRequest(data);
        }
    }

    public static getProduct(data: any, type: string): Product {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureResponse(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetResponse(data);
            default:
                return new FurnitureResponse(data);
        }
    }
}
