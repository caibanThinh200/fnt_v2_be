import { Schema } from 'mongoose';
import logger from '../../../../Config/logger';
import {ProductTypeResponse}  from '../../../../Mapping/Response/ProductTypeResponse';
class FurnitureTypeProductResponse extends ProductTypeResponse {
    private attribute: Schema.Types.ObjectId[];
    
    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.attribute = data?.attribute || [];
    }
}

export default FurnitureTypeProductResponse;