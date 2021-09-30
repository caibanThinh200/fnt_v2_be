"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillFactory = void 0;
const bill_1 = __importDefault(require("../Concreate/Furniture/Request/bill"));
const bill_2 = __importDefault(require("../Concreate/Furniture/Response/bill"));
const furniture_1 = __importDefault(require("../../models/Bill/furniture"));
// AA-store
// import AAPetRequest from "../Concreate/AA-PET/Request/bill";
// import AAPetResponse from "../Concreate/AA-PET/Response/bill";
// import AAPetSchema from "../../models/Categories/aa-store"
const define_1 = __importDefault(require("../../Constant/define"));
class BillFactory {
    static createBill(data, type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return new bill_1.default(data);
            // case TAG_DEFINE.STORE.AA_PET:
            //     return new AAPetRequest(data);
            default:
                return new bill_1.default(data);
        }
    }
    static getBill(data, type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return new bill_2.default(data);
            // case TAG_DEFINE.STORE.AA_PET:
            //     return new AAPetResponse(data);
            default:
                return new bill_2.default(data);
        }
    }
    static createSchema(data, type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return new furniture_1.default(data);
            // case TAG_DEFINE.STORE.AA_PET:
            //     return new AAPetSchema(data);
            default:
                return new furniture_1.default(data);
        }
    }
    static getSchema(type) {
        switch (type) {
            case define_1.default.STORE.FURNITURE:
                return furniture_1.default;
            // case TAG_DEFINE.STORE.AA_PET:
            //     return AAPetSchema;
            default:
                return furniture_1.default;
        }
    }
}
exports.BillFactory = BillFactory;
