import CategoryDetailRequest from '../../../../Mapping/Request/CategoryDetailRequest'

export default class AAPetRequest extends CategoryDetailRequest {
    constructor(data: any) {
        super(data);
        this.setAAStoreData(data);
    }

    setAAStoreData(data: any) {
        this.setData(data);
    }
}