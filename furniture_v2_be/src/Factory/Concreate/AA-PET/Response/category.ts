import { CategoryResponse } from '../../../../Mapping/Response/CategoryResponse';
import logger from '../../../../Config/logger';
class AAStoreResponse extends CategoryResponse {
    child_cate: any;

    constructor(data: any) {
        super(data)
        this.setAAStoreData(data);
    }

    setAAStoreData(data: any) {
        this.setData(data);
        this.child_cate =
            (data?.child_cate || []).length > 0
                ? data?.child_cate.map((item) => new AAStoreResponse(item))
                : [];
    }
}

export default AAStoreResponse;