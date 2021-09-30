import { generateData } from "../interface";

// Furniture
import { FurnitureProductRequest, FurnitureUserRequest } from "../Concreate/Furniture/Request/";
import { FurnitureProductResponse, FurnitureUserResponse } from "../Concreate/Furniture/Response/";
import FurnitureProductSchema from '../../models/Product/furniture';
import FurnitureUserSchema from '../../models/User/furniture'

// AA-PET
import { AAPetProductRequest, AAPetUserRequest } from "../Concreate/AA-PET/Request/";
import { AAPetProductResponse, AAPetUserResponse } from "../Concreate/AA-PET/Response/";
import AAPetProductSchema from '../../models/Product/aa-pet'
import AAPetUserSchema from "../../models/User/aa-pet";
import TAG_DEFINE from '../../Constant/define';

export class ProductFactory {
    public static createProduct(data: any, type: string): generateData {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return new FurnitureProductRequest(data);
            case TAG_DEFINE.STORE.AA_PET: return new AAPetProductRequest(data);
            default : return new FurnitureProductRequest(data);
        }
    }

    public static getProduct(data: any, type: string): generateData {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureProductResponse(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetProductResponse(data);
            default:
                return new FurnitureProductResponse(data);
        }
    }

    public static createSchema(data ,type) {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureProductSchema(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetProductSchema(data);
            default:
                return new FurnitureProductSchema(data);
        }
    }

    public static getSchema(type) {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return FurnitureProductSchema;
            case TAG_DEFINE.STORE.AA_PET:
                return AAPetProductSchema;
            default:
                return FurnitureProductSchema;
        }
    }
}


