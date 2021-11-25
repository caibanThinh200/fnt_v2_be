import logger from '../../../../Config/logger';
import {AccessoryResponse}  from '../../../../Mapping/Response/AccessoryResponse';
class FurnitureAccessoryResponse extends AccessoryResponse {

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
    }
}

export default FurnitureAccessoryResponse;