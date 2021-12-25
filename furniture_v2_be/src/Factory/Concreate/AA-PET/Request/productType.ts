import { Schema } from "mongoose";
import logger from "../../../../Config/logger";
import { ProductTypeRequest } from "../../../../Mapping/Request/ProductTypeRequest";
class AAPetTypeProductRequest extends ProductTypeRequest {
    private attribute: Schema.Types.ObjectId[];

    constructor(data: any) {
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any) {
        this.setData(data);
        this.attribute = data?.attribute || [];
    }
}

export default AAPetTypeProductRequest;
