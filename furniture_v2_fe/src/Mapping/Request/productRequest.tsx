export default class ProductRequest {
    private name: string;
    private description: string;
    private quantity: number;
    private saled_count: number;
    private discount_percent: number;
    private price: number;
    private status: number;
    private size: number;
    private productWeight: number;
    private maxWeight: number;
    private feature: string;
    private images: any;
    private categories: any;
    private created_at: Date;
    private updated_at: Date;

    constructor(data: any) {
        this.setData(data);
    }

    public setData(data: any): void {
        this.name = data.name || "";
        this.description = data.description || "";
        this.quantity = data.quantity || 0;
        this.saled_count = data.saled_count || 0;
        this.discount_percent = data.discount_percent || 0;
        this.price = data.price || 0;
        this.status = data.status || 0;
        this.size = data.size || 0;
        this.productWeight = data.productWeight || 0;
        this.maxWeight = data.maxWeight || 0;
        this.feature = data.feature || "";
        this.images = data.images || [];
        this.categories = data.categories || [];
        this.created_at = data.created_at || null;
        this.updated_at = data.updated_at || null;
    }
}