import mongoose from 'mongoose';
import CategoryRequest from "../../../../Mapping/Request/CategoryRequest";
import logger from "../../../../Config/logger";
class AAStoreRequest extends CategoryRequest {
    private child_cate: any;
    private _id: any;

    constructor(data: any) {
        super(data);
        this.setAAStoreData(data);
    }

    setAAStoreData(data: any) {
        this.setData(data);
        this._id = new mongoose.Types.ObjectId();
        this.child_cate =
            (data?.child_cate || []).map((item) => new AAStoreRequest(item)) ||
            [];
    }
}

export default AAStoreRequest;
