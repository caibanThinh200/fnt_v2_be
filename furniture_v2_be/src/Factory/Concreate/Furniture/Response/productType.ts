import { Schema } from 'mongoose';
import logger from '../../../../Config/logger';
import {ProductTypeResponse}  from '../../../../Mapping/Response/ProductTypeResponse';
import FurnitureAccessoryResponse from './accessory';
import { omit } from "lodash";

class FurnitureTypeProductResponse extends ProductTypeResponse {
    private attribute: Schema.Types.ObjectId[];
    
    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.attribute = data?.attribute.map(item => omit(new FurnitureAccessoryResponse(item)), ["types"]) || [];
    }
}

export default FurnitureTypeProductResponse;