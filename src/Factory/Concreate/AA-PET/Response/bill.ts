import {BillResponse} from '../../../../Mapping/Response/BillResponse';

export default class AAPetResponse extends BillResponse {
    private userId: any;
    private products: any;
    private orderId: string;
    private total: number;

    constructor(data: any){
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any){
        this.setData(data);
        this.userId = data?.userId;
        this.products = data?.products || [];
        this.orderId = data?.orderId;
        this.total = data?.total;
    }
}