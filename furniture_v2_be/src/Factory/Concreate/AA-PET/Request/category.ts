import  ProductRequest from '../../../../Mapping/Request/ProductRequest';
import logger from '../../../../config/logger';
class AAStoreRequest extends ProductRequest {

    constructor(data: any) {
        super(data)
        this.setAAStoreData(data);
    }

    setAAStoreData(data: any) {
        this.setData(data);

    }
}

export default AAStoreRequest;