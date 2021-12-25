export default class RegisterRequest {
    private name: string
    private password: string
    private email: string
    private phone: string
    private address: string
    private gender: number

    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any) {
        this.name = data.name || "";
        this.password = data.password || "";
        this.email = data.email || "";
        this.phone = data.phone || "";
        this.address = data.address || "";
        this.gender = data.gender || 0;
    };
}  