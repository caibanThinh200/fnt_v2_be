import logger from '../../../../config/logger';
import CategoryRequest from '../../../../Mapping/Request/CategoryRequest';
class FurnitureRequest extends CategoryRequest {
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