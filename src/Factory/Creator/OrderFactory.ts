import TAG_DEFINE from '../../Constant/define';

//furniture
import FurnitureRequest from '../Concreate/Furniture/Request/order';
import FurnitureResponse from '../Concreate/Furniture/Response/order';
import FurnitureModel from '../../models/Order/furniture';

//AA-PET
import AAPetRequest from '../Concreate/AA-PET/Request/order'
import AAPetResponse from '../Concreate/AA-PET/Response/order'
import AAPetModel from '../../models/Order/aa-pet';

export default class OrderFactory {
    public static createOrder(data, type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return new FurnitureRequest(data);
            case TAG_DEFINE.STORE.AA_PET: return new AAPetRequest(data);
            default: return new FurnitureRequest(data);
        }
    }
    
    public static getOrder(data, type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return new FurnitureResponse(data);
            case TAG_DEFINE.STORE.AA_PET: return new AAPetResponse(data);
            default: return new FurnitureResponse(data);
        }
    }

    public static createSchema(data, type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return new FurnitureModel(data);
            case TAG_DEFINE.STORE.AA_PET: return new AAPetModel(data);
            default: return new FurnitureModel(data);
        }
    }

    public static getSchema(type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return FurnitureModel;
            case TAG_DEFINE.STORE.AA_PET: return AAPetModel;
            default: return FurnitureModel;
        }
    }
}