import logger from '../../../../config/logger';
import { BillResponse } from '../../../../Mapping/Response/BillResponse';
class FurnitureResponse extends BillResponse {
    private user: any;
    private products: any;

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.user = data.user || "";
        this.products = data.products || "";
    }
}

export default FurnitureResponse;