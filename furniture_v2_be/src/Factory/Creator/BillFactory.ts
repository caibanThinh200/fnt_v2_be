import {generateData} from '../interface';

//AA-PET
import AAPetRequest from '../Concreate/AA-PET/Request/bill'
import AAPetResponse from '../Concreate/AA-PET/Response/bill'
import AASchema from '../../models/Bill/aa-pet'

import TAG_DEFINE from '../../Constant/define'

export default class BillFactory {
    public static createBill(data: any, type: string){
        switch(type){
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetRequest(data);

            default:
                return new AAPetRequest(data);
        }
    }

    public static getBill(data: any, type: string){
        switch(type){
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetResponse(data);

            default:
                return new AAPetResponse(data);
        }
    }

    public static createSchema(data: any, type: string){
        switch(type){
            case TAG_DEFINE.STORE.AA_PET:
                return new AASchema(data);


            default:
                return new AASchema(data);
        }
    }

    public static getSchema(type: string){
        switch(type){
            case TAG_DEFINE.STORE.AA_PET:
                return AASchema;


            default:
                return AASchema;
        }
    }
}