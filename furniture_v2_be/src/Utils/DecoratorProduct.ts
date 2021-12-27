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

        const attributesSchema = await AccessoryFactory.getSchema(this.type)
            .find()
            .where("_id")
            .in(ids);

        const attributeField = {};

        attributesSchema.forEach((att, index) => {
            Object.assign(attributeField, { [att.field]: values[index] });
        });

        Object.assign(this.product, {
            attribute: attributeField,
        });
    }

    public getProduct() {
        return this.product;
    }
}
