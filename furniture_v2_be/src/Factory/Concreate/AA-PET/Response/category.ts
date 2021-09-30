import { CategoryResponse } from '../../../../Mapping/Response/CategoryResponse';
import logger from '../../../../Config/logger';
class AAStoreRequest extends CategoryResponse {
    constructor(data: any) {
        super(data)
        this.setAAStoreData(data);
    }

    setAAStoreData(data: any) {
        this.setData(data);
    }
}

export default AAStoreRequest;