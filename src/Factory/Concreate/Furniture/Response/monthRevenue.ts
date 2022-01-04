import MonthRevenueResponse from '../../../../Mapping/Response/MonthRevenueResponse';

class FurnitureMonthRevenueResponse extends MonthRevenueResponse {
    constructor(data) {
        super(data);
        this.setData(data);
    }

    public setFurnitureData(data) {
        this.setData(data);
    }
}

export default FurnitureMonthRevenueResponse;