import { FurnitureProductRequest, FurnitureUserRequest } from "../Concreate/Furniture/Request";
import { FurnitureProductResponse, FurnitureUserResponse } from "../Concreate/Furniture/Response";
import FurnitureProductSchema from '../../models/Product/furniture';
import FurnitureUserSchema from '../../models/User/furniture'

// AA-PET
import { AAPetProductRequest, AAPetUserRequest } from "../Concreate/AA-PET/Request";
import { AAPetProductResponse, AAPetUserResponse } from "../Concreate/AA-PET/Response";
import AAPetProductSchema from '../../models/Product/aa-pet'
import AAPetUserSchema from "../../models/User/aa-pet";
import TAG_DEFINE from '../../Constant/define';
import { generateData } from '../interface';


export class UserFactory {
    public static createUser(data: any, type: string): generateData {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureUserRequest(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetUserRequest(data);
            default:
                return new FurnitureUserRequest(data);
        }
    }

    public static getUser(data: any, type: string): generateData {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureUserResponse(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetUserResponse(data);
            default:
                return new FurnitureUserResponse(data);
        }
    }

    public static createSchema(data, type) {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureUserSchema(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetUserSchema(data);
            default:
                return new FurnitureUserSchema(data);
        }
    }

    public static getSchema(type) {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return FurnitureUserSchema;
            case TAG_DEFINE.STORE.AA_PET:
                return AAPetUserSchema;
            default:
                return FurnitureUserSchema;
        }
    }
}