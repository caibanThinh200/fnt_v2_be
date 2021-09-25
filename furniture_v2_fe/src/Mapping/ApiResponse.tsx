import { getRestProps } from "../Util/functions"

interface Params extends Omit<getRestProps, "restProps"> {

}

export default class ApiResponse {
    private data: any
    private code: any
    private errors : any
    private status : any
    private statusText: any
    private headers: any
    private message: any
    private success: any
    private request: any
    
    
    constructor(data: Params){
        this.data = data.data || undefined;
        this.code = data.code || undefined;
        this.errors = data.errors || undefined;
        this.status = data.status || undefined;
        this.statusText = data.statusText;
        this.headers = data.headers || undefined;
        this.message = data.message || undefined;
        this.success = data.success || false;
        this.request = data.request || undefined;
    }
}