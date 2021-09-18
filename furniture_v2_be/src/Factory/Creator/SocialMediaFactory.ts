// Furniture
import { generateData } from "../interface";
import FurnitureRequest from "../Concreate/Furniture/Response/social-media";
import FurnitureResponse from "../Concreate/Furniture/Response/social-media";
import FurnitureSchema from '../../models/SocialMedia/furniture';

// AA-store
import AAPetRequest from "../Concreate/AA-PET/Request/social-media";
import AAPetResponse from "../Concreate/AA-PET/Response/social-media";
import AAPetSchema from "../../models/SocialMedia/aa-pets"

import TAG_DEFINE from "../../Constant/define";

export class SocialMediaFactory {
    public static createSocialMedia(data: any, type: string): generateData {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureRequest(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetRequest(data);
            default:
                return new FurnitureRequest(data);
        }
    }

    public static getSocialMedia(data: any, type: string): generateData {
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


