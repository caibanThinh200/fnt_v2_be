import { ProductRequest } from '../../../../Mapping/Request/ProductRequest';
import logger from '../../../../config/logger';
class FurnitureRequest extends ProductRequest {
    private code: any;
    private image: any;

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.code = data.code || "";
        this.image = data.image || "";
    }
}

export default FurnitureRequest;