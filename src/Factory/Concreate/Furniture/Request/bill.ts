import logger from "../../../../config/logger";
import BillRequest from "../../../../Mapping/Request/BillRequest";
import FurnitureUserRequest from "./user";
import FurnitureProductRequest from "./product";
import randomstring from "randomstring";

class FurnitureRequest extends BillRequest {
    private user: any;
    private products: any;
    private payment: any;
    private code: string;
    private status: number;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.user = new FurnitureUserRequest(data?.contact || {}) || "";
        this.code = randomstring.generate({
            length: 10,
            capitalization: "uppercase",
            charset: "hex"
        }) || "";
        this.products = data?.products.map((item) => ({
            product: item?.id || "", 
            buy_quantity: item?.buy_quantity || 1
        })) || [];
        this.status = data?.status || 1;
        this.payment = data?.payment || {};
    }
}

export default FurnitureRequest;
