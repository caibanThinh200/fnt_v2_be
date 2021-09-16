import ProductResponse from "../../../../Mapping/Response/ProductResponse";
import logger from "../../../../config/logger";
class AAPetModel extends ProductResponse {
    private category_id: string;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.category_id = data.category_id || "";
    }
}

export default AAPetModel;
