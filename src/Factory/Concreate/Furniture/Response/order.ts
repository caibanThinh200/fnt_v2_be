import { OrderResponse } from "../../../../Mapping/Response/OrderResponse";

class FurnitureOrderResponse extends OrderResponse {
    private delivery: any;
    private payment: any;
    private products: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.delivery = data?.delivery;
        this.payment = data?.payment;
        this.products = data?.products;
    }
}

export default FurnitureOrderResponse;
