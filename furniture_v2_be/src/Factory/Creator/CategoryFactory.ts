// Furniture
import { generateData } from "../interface";
import FurnitureCategoryRequest from "../Concreate/Furniture/Request/category";
import FurnitureResponse from "../Concreate/Furniture/Response/category";
import FurnitureSchema from '../../models/Categories/furniture';

// AA-store
import AAPetRequest from "../Concreate/AA-PET/Request/category";
import AAPetResponse from "../Concreate/AA-PET/Response/category";
import AAPetSchema from "../../models/Categories/aa-store"

import TAG_DEFINE from "../../Constant/define";

export class CategoryFactory {
    public static createCategory(data: any, type: string): generateData {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureCategoryRequest(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetRequest(data);
            default:
                return new FurnitureCategoryRequest(data);
        }
    }

    public static getCategory(data: any, type: string): generateData {
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
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetSchema(data);
            default:
                return new FurnitureSchema(data);
        }
    }

    public static getSchema(type) {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return FurnitureSchema;
            case TAG_DEFINE.STORE.AA_PET:
                return AAPetSchema;
            default:
                return FurnitureSchema;
        }
    }
}


