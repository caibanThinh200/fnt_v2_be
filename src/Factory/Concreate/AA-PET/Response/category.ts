import { CategoryResponse } from '../../../../Mapping/Response/CategoryResponse';
import logger from '../../../../config/logger';
class AAStoreResponse extends CategoryResponse {
    childCate: any;

    constructor(data: any) {
        super(data)
        this.setAAStoreData(data);
    }

    setAAStoreData(data: any) {
        this.setData(data);
        this.childCate =
            (data?.childCate || []).length > 0
                ? data?.childCate.map((item) => new AAStoreResponse(item))
                : [];
    }
}

export default AAStoreResponse;