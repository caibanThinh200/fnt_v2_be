export default class AuthRequest {
    private email: string;
    private password: string;
    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any) {
        this.email = data.email || "";
        this.password = data.password || "";
    }
}