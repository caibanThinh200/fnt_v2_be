import logger from '../../../../Config/logger';
import {ProductTypeResponse}  from '../../../../Mapping/Response/ProductTypeResponse';
class FurnitureTypeProductResponse extends ProductTypeResponse {

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
    }
}

export default FurnitureTypeProductResponse;