import logger from "../../../../Config/logger";
import CategoryRequest from "../../../../Mapping/Request/CategoryRequest";
class FurnitureRequest extends CategoryRequest {
    private code: any;
    private image: any;
    private childCate: any;

    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
        this.code = data.code || "";
        this.childCate =
            data.childCate && (data.childCate || []).length > 0
                ? data.childCate.map((item) => new FurnitureRequest(item))
                : [];
        this.image = data.image || "";
    }
}

export default FurnitureRequest;
