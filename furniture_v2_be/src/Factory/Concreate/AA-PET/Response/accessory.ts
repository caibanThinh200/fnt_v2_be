import logger from "../../../../Config/logger";
import { AccessoryResponse } from "../../../../Mapping/Response/AccessoryResponse";

class AAPetTypeProductResponse extends AccessoryResponse {
    constructor(data: any) {
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any) {
        this.setData(data);
    }
}

export default AAPetTypeProductResponse;
