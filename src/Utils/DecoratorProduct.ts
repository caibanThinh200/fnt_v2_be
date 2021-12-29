import { AccessoryFactory } from "./../Factory/Creator/AccessoryFactory";
export default class DecoratorProduct {
    private type: string;
    private product: any;

    constructor(type: string, product: any) {
        this.type = type;
        this.product = product;
    }

    public async setAttribute(attributes: any) {
        const ids = Object.keys(attributes);
        const values = Object.values(attributes);
        let attributeField= {};

        console.log(ids, values);

        for (let i = 0; i < ids.length; i++) {
            const accessory = await AccessoryFactory.getSchema(
                this.type
            ).findById(ids[i]);
            
            Object.assign(attributeField, {
                [accessory.field]: values[i]
            })
        }

        Object.assign(this.product, {
            accessories: attributeField,
        });
    }

    public getProduct() {
        return this.product;
    }
}
