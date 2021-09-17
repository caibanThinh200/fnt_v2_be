import BillRequest from '../../../../Mapping/Request/BillRequest';

export default class AAPetRequest extends BillRequest {
    constructor(data: any) {
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any) {
        this.setData(data);
    }
}