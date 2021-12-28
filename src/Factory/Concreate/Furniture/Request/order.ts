import { OrderRequest } from "../../../../Mapping/Request/OrderRequest";

class FurnitureOrderRequest extends OrderRequest {
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

export default FurnitureOrderRequest;
