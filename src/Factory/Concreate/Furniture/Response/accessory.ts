import logger from "../../../../config/logger";
import { AccessoryResponse } from "../../../../Mapping/Response/AccessoryResponse";
class FurnitureAccessoryResponse extends AccessoryResponse {
    private code: string;
    private types: number[];
    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.types = data?.types || [];
        this.code = data.code || 0;
    }
}

export default FurnitureAccessoryResponse;
