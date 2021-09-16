import { generateData } from "../interface";
import FurnitureRequest from "../Concreate/Request/Furniture/product";
import FurnitureResponse from "../Concreate/Response/Furniture/product";
import FurnitureSchema from '../../models/Product/furniture';

import AAPetRequest from "../Concreate/Request/AAPet/product";
import AAPetResponse from "../Concreate/Response/AAPet/product";
import TAG_DEFINE from "../../Constant/define";

export class ProductFactory {
    public static createProduct(data: any, type: string): generateData {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureRequest(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetRequest(data);
            default:
                return new FurnitureRequest(data);
        }
    }

    public static getProduct(data: any, type: string): generateData {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureResponse(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetResponse(data);
            default:
                return new FurnitureResponse(data);
        }
    }

    public static createSchema(data ,type) {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureSchema(data);
            // case TAG_DEFINE.STORE.AA_PET:
            //     return new AAPetRequest(data);
            default:
                return new FurnitureSchema(data);
        }
    }
    
    public static getSchema(type) {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return FurnitureSchema;
            // case TAG_DEFINE.STORE.AA_PET:
            //     return AAPetResponse;
            default:
                return FurnitureSchema;
        }
    }
}


