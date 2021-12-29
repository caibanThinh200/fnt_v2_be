import { OrderResponse } from "../../../../Mapping/Response/OrderResponse";

class AAPetOrderResponse extends OrderResponse {
    private delivery: any;
    private payment: any;
    private products: any;
    private userId: string;

    constructor(data: any) {
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any) {
        this.setData(data);
        this.delivery = data?.delivery;
        this.payment = data?.payment;
        this.products = data?.products;
        this.userId = data?.userId;
    }
}

export default AAPetOrderResponse;
