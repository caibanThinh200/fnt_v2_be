import ProductRequest from "../../../../Mapping/Request/ProductRequest";
import logger from "../../../../Config/logger";
import FurnitureAccessoryRequest from "./accessory";
import FurnitureUploadRequest from "./upload";
class FurnitureRequest extends ProductRequest {
    private images: any;
    private isPercent: boolean;
    private categories: any;
    private code: number;
    private accessories: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.code = data?. code || 0;
        this.isPercent = data?.isPercent || false;
        // this.accessories = new FurnitureAccessoryRequest(data?.accessory, data?.type);
        // this.size = data?.size || "";
        // this.productWeight = data?.productWeight || 0;
        // this.maxWeight = data?.maxWeight || 0;
        // this.feature = data?.feature || "";
        this.accessories = data?.attribute || {};
        this.images = (data?.images || []).map(item => new FurnitureUploadRequest(item));
        this.categories = data?.categories || [];
    }
}

export default FurnitureRequest;
