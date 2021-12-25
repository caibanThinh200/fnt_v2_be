import TAG_DEFINE from '../../Constant/define';
import AccessoryRequest from '../Concreate/Furniture/Request/accessory';
import AccessoryResponse from '../Concreate/Furniture/Response/accessory';
import FurnitureAccessoryModel, { FurnitureAccessorySchema } from '../../models/Accessory/furniture';

//AA-PET
import AAPetRequest from '../Concreate/AA-PET/Request/accessory'
import AAPetResponse from '../Concreate/AA-PET/Response/accessory'
import AAPetModel from '../../models/Accessory/aa-pet';
export class AccessoryFactory {
    public static createAccessory(data, type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return new AccessoryRequest(data);
            case TAG_DEFINE.STORE.AA_PET: return new AAPetRequest(data);
            default: return new AccessoryRequest(data);
        }
    }
    
    public static getAccessory(data, type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return new AccessoryResponse(data);
            case TAG_DEFINE.STORE.AA_PET: return new AAPetResponse(data);
            default: return new AccessoryResponse(data);
        }
    }

    public static createSchema(data, type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return new FurnitureAccessoryModel(data);
            case TAG_DEFINE.STORE.AA_PET: return new AAPetModel(data);
            default: return new FurnitureAccessoryModel(data);
        }
    }

    public static getSchema(type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return FurnitureAccessoryModel;
            case TAG_DEFINE.STORE.AA_PET: return AAPetModel;
            default: return FurnitureAccessoryModel;
        }
    }
}