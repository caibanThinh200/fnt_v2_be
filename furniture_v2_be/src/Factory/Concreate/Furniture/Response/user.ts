import { UserModel } from "../../../../Mapping/Response/UserResponse";

export default class AAPetModel extends UserModel {
    constructor(data: any) {
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any) {
        this.setData(data);
    }
}
