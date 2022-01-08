import logger from "../../../../Config/logger";
import { BillResponse } from "../../../../Mapping/Response/BillResponse";
import { FurnitureUserResponse, FurnitureProductResponse } from "./index";
class FurnitureResponse extends BillResponse {
    private user: any;
    private products: any;
    private total: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.user = new FurnitureUserResponse(data?.user) || {};
        this.total =
            (data?.products || []).reduce((i, k) => i + k.price, 0) || 0;
        this.products =
            (data?.products || []).map(
                (item) => new FurnitureProductResponse(item)
            ) || [];
    }
}

export default FurnitureResponse;
