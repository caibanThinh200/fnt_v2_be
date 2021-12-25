export default class AuthResponse {
    private id: string
    private name: string
    private password: string
    private email: string
    private phone: string
    private address: string
    private gender: number
    private accessToken: string
    private created_at: string
    private updated_at: string
    constructor(data: any) {
        this.setData(data);
    }

    setData(data: any) {
        this.id = data._id || "";
        this.name = data.name || "";
        this.password = data.password || "";
        this.email = data.email || "";
        this.phone = data.phone || "";
        this.address = data.address || "";
        this.gender = data.gender || 0;
        this.accessToken = data.accessToken || "";
        this.created_at = data.created_at || "";
        this.updated_at = data.updated_at || "";
    }
}