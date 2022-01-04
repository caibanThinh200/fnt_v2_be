import ProductResponse from "../../../../Mapping/Response/ProductResponse";
import logger from "../../../../Config/logger";
import FurnitureUploadResponse from "./upload";
import { UploadResponse } from '../../../../Mapping/Response/UploadResponse';

class FurnitureResponse extends ProductResponse {
    private mainThumb: any;
    private subThumb: any;
    private is_percent: boolean;
    private categories: any;
    private discount_price: number;
    private code: number;
    private buy_quantity: number;
    private accessories: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.code = data?. code || 0;
        this.is_percent = data?.is_percent || false;
        this.accessories = data?.accessories || {};
        this.mainThumb = (data?.mainThumb || []).map(item => new FurnitureUploadResponse(item));
        this.subThumb = (data?.subThumb || []).map(item => new FurnitureUploadResponse(item));
        this.discount_price = data?.discount_price || 0;
        this.buy_quantity= data?.buy_quantity || 0;
        this.categories = data?.categories || "";
    }
}

export default FurnitureResponse;
