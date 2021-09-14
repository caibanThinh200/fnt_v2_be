import { ProductModel } from '../../../../Mapping/Request/ProductRequest';
import logger from '../../../../config/logger';
class FurnitureModel extends ProductModel {
    private colors: any;

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.colors = data.colors || "";
    }
}

export default FurnitureModel;