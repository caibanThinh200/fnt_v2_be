import {BillResponse} from '../../../../Mapping/Response/BillResponse';

export default class AAPetResponse extends BillResponse {

    constructor(data: any){
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any){
        this.setData(data);
    }
}