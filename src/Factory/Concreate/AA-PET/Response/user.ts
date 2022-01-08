import { UserModel } from "../../../../Mapping/Response/UserResponse";

export default class AAPetModel extends UserModel {
    private username: any;
    private delivery: any;
    private role: any;
    private salary: any;
    private typeStaff: any;
    private active: any;

    constructor(data: any) {
        super(data);
        this.setAAPetData(data);
    }

    setAAPetData(data: any) {
        this.setData(data);
        this.username = data?.username || "";
        this.delivery = data?.delivery || [];
        this.role = data?.role || "customer";
        this.salary = data?.salary;
        this.typeStaff = data?.typeStaff;
        this.active = data?.active || true;
    }
}
