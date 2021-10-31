import { Schema } from 'mongoose';
import logger from '../../../../Config/logger';
import {ProductTypeRequest}  from '../../../../Mapping/Request/ProductTypeRequest';
class FurnitureTypeProductRequest extends ProductTypeRequest {
    private attribute: Schema.Types.ObjectId[];

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.attribute = data?.attribute || []
    }
}

export default FurnitureTypeProductRequest;