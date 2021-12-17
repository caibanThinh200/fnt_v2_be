import logger from '../../../../Config/logger';
import {AccessoryRequest}  from '../../../../Mapping/Request/AccessoryRequest';
class FurnitureAccessoryRequest extends AccessoryRequest {
    private code: number
    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.code = data.code || 0;
    }
}

export default FurnitureAccessoryRequest;