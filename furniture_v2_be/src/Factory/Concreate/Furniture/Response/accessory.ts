import logger from '../../../../Config/logger';
import {AccessoryResponse}  from '../../../../Mapping/Response/AccessoryResponse';
class FurnitureAccessoryResponse extends AccessoryResponse {
    private code: string
    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.code = data.code || 0;
    }
}

export default FurnitureAccessoryResponse;