import MonthRevenueRequest from '../../../../Mapping/Request/MonthRevenueRequest';

class FurnitureMonthRevenueRequest extends MonthRevenueRequest {
    constructor(data) {
        super(data);
        this.setData(data);
    }

    public setFurnitureData(data) {
        this.setData(data);
    }
}

export default FurnitureMonthRevenueRequest;