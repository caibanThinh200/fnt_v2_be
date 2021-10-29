import ProductRequest from "../../../../Mapping/Request/ProductRequest";
import logger from "../../../../Config/logger";
import FurnitureAccessoryRequest from "./accessory";
import FurnitureUploadRequest from "./upload";
class FurnitureRequest extends ProductRequest {
    private size: string;
    private productWeight: number;
    private accessories: any
    private maxWeight: number;
    private feature: any;
    private images: any;
    private categories: any;
    private type: number;;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.type = data?.type || 0;
        // this.accessories = new FurnitureAccessoryRequest(data?.accessory, data?.type);
        this.size = data?.size || "";
        this.productWeight = data?.productWeight || 0;
        this.maxWeight = data?.maxWeight || 0;
        this.feature = data?.feature || "";
        this.images = (data?.images || []).map(item => new FurnitureUploadRequest(item));
        this.categories = data?.categories || "";
    }
}

export default FurnitureRequest;
