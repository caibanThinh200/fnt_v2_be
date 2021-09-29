import ProductRequest from "../../../../Mapping/Request/ProductRequest";
import logger from "../../../../Config/logger";
class AAPetModel extends ProductRequest {
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
