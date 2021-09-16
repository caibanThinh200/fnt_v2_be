import TAG_DEFINE from "../../Constant/define";
import mongoose from "mongoose";
import GiftsSchema from '../GiftsSchema';

import FurnitureSchema from './furniture';
import AAPetSchema from './aa-pet'

export const createSchema = (data ,type) => {
    switch(type) {
        case TAG_DEFINE.STORE.FURNITURE: {
            return new FurnitureSchema(data);
        }

        case TAG_DEFINE.STORE.AA_PET: {
            return new AAPetSchema(data);
        }
        default: {
            return new FurnitureSchema(data);
        }
    }
}

export const getSchema = (type) => {
    switch (type) {
        case TAG_DEFINE.STORE.FURNITURE:
            return FurnitureSchema;
        case TAG_DEFINE.STORE.AA_PET: 
            return AAPetSchema
        default:
            return FurnitureSchema;
    }
}
