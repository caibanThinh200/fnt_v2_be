import logger from "../../../../Config/logger";
import { AccessoryRequest } from "../../../../Mapping/Request/AccessoryRequest";
class AAPetAccessoryRequest extends AccessoryRequest {
    constructor(data: any) {
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any) {
        this.setData(data);
    }
}

export default AAPetAccessoryRequest;
