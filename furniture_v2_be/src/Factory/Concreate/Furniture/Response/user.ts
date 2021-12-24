import { UserModel } from "../../../../Mapping/Response/UserResponse";

export default class AAPetModel extends UserModel {
    wishList: any;
    role: string;
    constructor(data: any) {
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any) {
        this.setData(data);
        this.wishList = data?.wishList;
        this.role = data?.role;
    }
}
