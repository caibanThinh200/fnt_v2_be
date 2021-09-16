import ProductRequest from "../../../../Mapping/Request/ProductRequest";
import logger from "../../../../config/logger";
class FurnitureRequest extends ProductRequest {
    private size: any;
    private productWeight: any;
    private maxWeight: any;
    private feature: any;
    private images: any;
    private categories: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.size = data.size || "";
        this.productWeight = data.productWeight || 0;
        this.maxWeight = data.maxWeight || 0;
        this.feature = data.feature || "";
        this.images = data.images || null;
        this.categories = data.categories || "";
    }
}

export default FurnitureRequest;
