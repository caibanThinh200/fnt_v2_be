import { generateData } from "../../Factory/interface";

export abstract class OrderRequest implements generateData {
  private total: number;
  private description: string;
  private created_at: Date;
  private updated_at: Date;a

  constructor(data: any) {
    this.setData(data);
  }

  setData(data: any): void {
    this.total = data?.total || 0;
    this.description = data?.description || "";
    this.created_at = data?.created_at || Date.now();
    this.updated_at = data?.updated_at || Date.now();
  }
}
