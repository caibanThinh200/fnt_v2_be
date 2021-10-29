import TAG_DEFINE from '../../Constant/define';
import FurnitureTypeProductRequest from '../Concreate/Furniture/Request/productType';
import FurnitureTypeProductResponse from '../Concreate/Furniture/Response/productType';
import FurnitureProductTypeModel, { FurnitureProductTypeSchema } from '../../models/ProductType/furniture';
export class ProductTypeFactory {
    public static createProductType(data, type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return new FurnitureTypeProductRequest(data);
            default: return new FurnitureTypeProductRequest(data);
        }
    }
    
    public static getProductType(data, type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return new FurnitureTypeProductResponse(data);
            default: return new FurnitureTypeProductResponse(data);
        }
    }

    public static createSchema(data, type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return new FurnitureProductTypeModel(data);
            default: return new FurnitureProductTypeModel(data);
        }
    }

    public static getSchema(type) {
        switch(type) {
            case TAG_DEFINE.STORE.FURNITURE: return FurnitureProductTypeModel;
            default: return FurnitureProductTypeModel;
        }
    }
}