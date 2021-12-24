import mongoose from 'mongoose';
import CategoryRequest from "../../../../Mapping/Request/CategoryRequest";
import logger from "../../../../Config/logger";
class AAStoreRequest extends CategoryRequest {
    private childCate: any;

    constructor(data: any) {
        super(data);
        this.setAAStoreData(data);
    }

    setAAStoreData(data: any) {
        this.setData(data);
        this.childCate =
            (data?.childCate || []).map((item) => new AAStoreRequest(item)) ||
            [];
    }
}

export default AAStoreRequest;
