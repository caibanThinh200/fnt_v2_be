import logger from "../../../../Config/logger";
import { AccessoryRequest } from "../../../../Mapping/Request/AccessoryRequest";
class AAPetAccessoryRequest extends AccessoryRequest {
    types: any[];
    constructor(data: any) {
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any) {
        this.types = data?.types || [];
        this.setData(data);
    }
}

export default AAPetAccessoryRequest;
