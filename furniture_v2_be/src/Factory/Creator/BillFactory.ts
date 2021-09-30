// Furniture
import { generateData } from "../interface";
import FurnitureBillRequest from "../Concreate/Furniture/Request/bill";
import FurnitureResponse from "../Concreate/Furniture/Response/bill";
import FurnitureSchema from '../../models/Bill/furniture';

// AA-store
import AAPetRequest from "../Concreate/AA-PET/Request/bill";
import AAPetResponse from "../Concreate/AA-PET/Response/bill";
import AAPetSchema from "../../models/Bill/aa-pet"

import TAG_DEFINE from "../../Constant/define";

export default class BillFactory {
    public static createBill(data: any, type: string): generateData {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureBillRequest(data);
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetRequest(data);
            default:
                return new FurnitureBillRequest(data);
        }
    }

    public static getBill(data: any, type: string): generateData {
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


