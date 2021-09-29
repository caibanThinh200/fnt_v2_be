import ProductModel from "../../../../Mapping/Response/ProductResponse";
import logger from "../../../../Config/logger";
class AAPetModel extends ProductModel {
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
