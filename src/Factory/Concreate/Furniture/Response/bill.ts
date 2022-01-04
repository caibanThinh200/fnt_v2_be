import logger from '../../../../Config/logger';
import { BillResponse } from '../../../../Mapping/Response/BillResponse';
import { FurnitureUserResponse, FurnitureProductResponse } from './index';
class FurnitureResponse extends BillResponse {
    private user: any;
    private products: any;
    private code: string
    private status: number;

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.code = data?.code || "";
        this.status = data?.status || 1;
        this.user = new FurnitureUserResponse(data?.user) || {}
        this.products = (data?.products || []).map(item => new FurnitureProductResponse(Object.assign(item.product, { buy_quantity: item.buy_quantity || 0 }))) || [];
    }
}

export default FurnitureResponse;