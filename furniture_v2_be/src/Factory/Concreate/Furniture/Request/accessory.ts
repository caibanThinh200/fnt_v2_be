import logger from '../../../../Config/logger';
import {AccessoryRequest}  from '../../../../Mapping/Request/AcessoryRequest';
class FurnitureTypeProductRequest extends AccessoryRequest {

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
    }
}

export default FurnitureTypeProductRequest;