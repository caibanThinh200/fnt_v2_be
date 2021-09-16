import { CategoryResponse } from '../../../../Mapping/Response/CategoryResponse';
import logger from '../../../../config/logger';
class FurnitureRequest extends CategoryResponse {
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