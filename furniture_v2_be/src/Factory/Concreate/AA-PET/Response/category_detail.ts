import CategoryDetailRequest from "../../../../Mapping/Response/CategoryDetailResponse";

export default class AAPetRequest extends CategoryDetailRequest {
    constructor(data: any) {
        super(data);
        this.setAAStoreData(data);
    }

    setAAStoreData(data: any) {
        this.setData(data);
    }
}
