import CategoryRequest from "../../../../Mapping/Request/CategoryRequest";
import logger from '../../../../config/logger';
class AAStoreRequest extends CategoryRequest {
    constructor(data: any) {
        super(data);
        this.setAAStoreData(data);
    }

    setAAStoreData(data: any) {
        this.setData(data);
    }
}

export default AAStoreRequest;