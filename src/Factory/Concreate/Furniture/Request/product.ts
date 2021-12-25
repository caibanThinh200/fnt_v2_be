import ProductRequest from "../../../../Mapping/Request/ProductRequest";
import logger from "../../../../Config/logger";
import FurnitureAccessoryRequest from "./accessory";
import FurnitureUploadRequest from "./upload";
class FurnitureRequest extends ProductRequest {
    private images: any;
    private is_percent: boolean;
    private categories: any;
    private code: number;
    private discount_price: number
    private accessories: any;
    private subThumb: any;
    private mainThumb: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.code = data?.code || 0;
        this.is_percent = data?.is_percent || false;
        // this.accessories = new FurnitureAccessoryRequest(data?.accessory, data?.type);
        // this.size = data?.size || "";
        // this.productWeight = data?.productWeight || 0;
        // this.maxWeight = data?.maxWeight || 0;
        // this.feature = data?.feature || "";
        this.accessories = data?.attribute || {};
        this.discount_price = data?.discount_price;
        // this.images = (data?.images || []).map(item => new FurnitureUploadRequest(item));
        this.subThumb = data?.subThumb.length > 0 ? (data?.subThumb || []).map(item => new FurnitureUploadRequest(item)) : [];
        this.mainThumb = data?.mainThumb.length > 0 ? (data?.mainThumb || []).map(item => new FurnitureUploadRequest(item)) : [];
        this.categories = data?.categories || [];
    }
}

export default FurnitureRequest;
