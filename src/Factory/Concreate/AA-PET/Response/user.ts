import { UserModel } from "../../../../Mapping/Response/UserResponse";

export default class AAPetModel extends UserModel {
    private username: any;
    private delivery: any;
    constructor(data: any) {
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any) {
        this.setData(data);
        this.username = data?.username || "";
        this.delivery = data?.delivery || [];
    }
}
