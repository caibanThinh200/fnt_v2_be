import { CategoryResponse } from '../../../../Mapping/Response/CategoryResponse';
import logger from '../../../../Config/logger';
class FurnitureResponse extends CategoryResponse {
    private code: any;
    private image: any;
    private childCate: any;

    constructor(data: any) {
        super(data)
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.code = data.code || "";
        this.childCate = (data.childCate || []).length > 0 ? data.childCate.map(item => new FurnitureResponse(item)) : [];
        this.image = data.image || "";
    }
}

export default FurnitureResponse;