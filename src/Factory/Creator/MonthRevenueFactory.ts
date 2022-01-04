// Furniture
import { generateData } from "../interface";
import FurnitureMonthRevenueRequest from "../Concreate/Furniture/Request/monthRevenue";
import FurnitureResponse from "../Concreate/Furniture/Response/monthRevenue";
import FurnitureSchema from '../../models/MonthRevenue/furniture';

// AA-store
import AAPetRequest from "../Concreate/AA-PET/Request/bill";
import AAPetResponse from "../Concreate/AA-PET/Response/bill";
import AAPetSchema from "../../models/Bill/aa-pet"

import TAG_DEFINE from "../../Constant/define";

export default class Factory {
    public static createMonthRevenue(data: any, type: string): generateData {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureMonthRevenueRequest(data);
            // case TAG_DEFINE.STORE.AA_PET:
            //     return new AAPetRequest(data);
            default:
                return new FurnitureMonthRevenueRequest(data);
        }
    }

    public static getMonthRevenue(data: any, type: string): generateData {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureResponse(data);
            // case TAG_DEFINE.STORE.AA_PET:
            //     return new AAPetResponse(data);
            default:
                return new FurnitureResponse(data);
        }
    }

    public static createSchema(data ,type) {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return new FurnitureSchema(data);
            // case TAG_DEFINE.STORE.AA_PET:
            //     return new AAPetSchema(data);
            default:
                return new FurnitureSchema(data);
        }
    }

    public static getSchema(type) {
        switch (type) {
            case TAG_DEFINE.STORE.FURNITURE:
                return FurnitureSchema;
            // case TAG_DEFINE.STORE.AA_PET:
            //     return AAPetSchema;
            default:
                return FurnitureSchema;
        }
    }
}


