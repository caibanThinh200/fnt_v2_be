import logger from "../../../../Config/logger";
import { AccessoryResponse } from "../../../../Mapping/Response/AccessoryResponse";

class AAPetTypeProductResponse extends AccessoryResponse {
    private types: any[];
    constructor(data: any) {
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any) {
        this.types = data?.types || [];
        this.setData(data);
    }
}

export default AAPetTypeProductResponse;
