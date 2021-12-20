import { Schema } from "mongoose";
import logger from "../../../../Config/logger";
import { ProductTypeResponse } from "../../../../Mapping/Response/ProductTypeResponse";
class AAPetTypeProductResponse extends ProductTypeResponse {
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

export default AAPetTypeProductResponse;
