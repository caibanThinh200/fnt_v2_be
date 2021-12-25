import { ProductTypeFactory } from '../Factory/Creator/ProductTypeFactory';
import { AccessoryFactory } from '../Factory/Creator/AccessoryFactory';

export const AddTypeInAccessory = async (doc, type) => {
    await AccessoryFactory.getSchema(type)
    .find (
        { types: { "$in" : [doc?.type] } }
    )
    .then (res => {
        res.map(async item => {
            await AccessoryFactory.getSchema(type)
            .findById(item.id)
            .then(async result => 
                await result.updateOne({
                $pull: {
                    types: doc?.type
                }
            }))
        })
    });
    (doc?.attribute || []).map(async id => {
        const currentAccessory = await AccessoryFactory.getSchema(type).findById(id);
        await currentAccessory.updateOne({
            $addToSet: {
                types: doc?.type
            }
        })
    });
};