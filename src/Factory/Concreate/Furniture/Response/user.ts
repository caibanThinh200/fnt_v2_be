import { UserModel } from "../../../../Mapping/Response/UserResponse";

export default class FurnitureUserResponse extends UserModel {
    constructor(data: any) {
        super(data);
        this.setFurnitureUserData(data);
    }

    setFurnitureUserData(data: any) {
        this.setData(data);
    }
}
