import ProductRequest from "../../../../Mapping/Request/ProductRequest";
import logger from "../../../../config/logger";
class AAPetModel extends ProductRequest {
    private category_detail_id: string;
    private images: Array<string>
    private accessories: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.category_detail_id = data?.category_detail_id || "";
        this.images = data?.images || [];
        this.accessories = data?.accessories || {};
    }
}

export default AAPetModel;
