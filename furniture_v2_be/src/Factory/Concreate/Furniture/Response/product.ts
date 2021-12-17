import ProductResponse from "../../../../Mapping/Response/ProductResponse";
import logger from "../../../../Config/logger";
import FurnitureUploadResponse from "./upload";
import { UploadResponse } from '../../../../Mapping/Response/UploadResponse';

class FurnitureResponse extends ProductResponse {
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
        this.accessories = data?.attribute || {};
        this.images = (data?.images || []).map(item => new FurnitureUploadResponse(item));
        this.categories = data?.categories || "";
    }
}

export default FurnitureResponse;
