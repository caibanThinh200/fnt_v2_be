import TAG_DEFINE from '../../Constant/define';
import AccessoryRequest from '../Concreate/Furniture/Request/accessory';
import AccessoryResponse from '../Concreate/Furniture/Response/accessory';
import FurnitureAccessoryModel, { FurnitureAccessorySchema } from '../../models/Accessory/furniture';
export class AccessoryFactory {
    public static createAccessory(data, type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return new AccessoryRequest(data);
            default: return new AccessoryRequest(data);
        }
    }
    
    public static getAccessory(data, type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return new AccessoryResponse(data);
            default: return new AccessoryResponse(data);
        }
    }

    public static createSchema(data, type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return new FurnitureAccessoryModel(data);
            default: return new FurnitureAccessoryModel(data);
        }
    }

    public static getSchema(type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return FurnitureAccessoryModel;
            default: return FurnitureAccessoryModel;
        }
    }
}