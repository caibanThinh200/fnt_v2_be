import logger from '../../../../Config/logger';
import {ProductTypeRequest}  from '../../../../Mapping/Request/ProductTypeRequest';
class FurnitureTypeProductRequest extends ProductTypeRequest {

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
    }
}

export default FurnitureTypeProductRequest;