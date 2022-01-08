import ProductModel from "../../../../Mapping/Response/ProductResponse";
import logger from "../../../../Config/logger";
class AAPetModel extends ProductModel {
    private category_detail_id: string;
    private images: Array<string>
    private accessories: any;
    private rating_point: number;
    private reviews: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.category_detail_id = data?.category_detail_id || "";
        this.images = data?.images || [];
        this.accessories = data?.accessories || {};
        this.rating_point = data?.rating_point || 0;
        this.reviews = data?.reviews || [];
    }
}

export default AAPetModel;
