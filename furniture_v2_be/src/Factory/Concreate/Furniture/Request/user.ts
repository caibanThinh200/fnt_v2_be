import { UserModel } from "../../../../Mapping/Request/UserRequest";

export default class FurnitureModel extends UserModel {
    constructor(data: any) {
        super(data);
        this.setFurnitureData(data);
    }

    setFurnitureData(data: any) {
        this.setData(data);
    }
}
