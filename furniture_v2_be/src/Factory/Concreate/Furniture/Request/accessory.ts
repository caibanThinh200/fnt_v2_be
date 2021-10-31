import logger from '../../../../Config/logger';
import {AccessoryRequest}  from '../../../../Mapping/Request/AccessoryRequest';
class FurnitureAccesoryRequest extends AccessoryRequest {

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
    }
}

export default FurnitureAccesoryRequest;