import { generateData } from '../interface';

//AA-pet
import AAPetRequest from '../Concreate/AA-PET/Request/category_detail';
import AAPetResponse from '../Concreate/AA-PET/Response/category_detail';
import AAPetSchema from '../../models/CategoryDetail/aa-pet';

import TAG_DEFINE from "../../Constant/define";

export default class CategoryDetailFactory{
    public static CreateCategoryDetail(data: any, type: string): generateData{
        switch (type){
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetRequest(data);
            default: return new AAPetRequest(data);
        }
    }

    public static GetCategoryDetail(data: any, type: string): generateData{
        switch (type){
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetResponse(data);
            default: return new AAPetResponse(data);
        }
    }

    public static CreateSchema(data, type){
        switch (type) {
            case TAG_DEFINE.STORE.AA_PET:
                return new AAPetSchema(data);
            default: return new AAPetSchema(data);
        }
    }

    public static GetSchema(type){
        switch (type) {
            case TAG_DEFINE.STORE.AA_PET:
                return AAPetSchema;
            default: return AAPetSchema;
        }
    }
}