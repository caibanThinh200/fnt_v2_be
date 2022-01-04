import { NextFunction, Request, Response } from "express";
import upload from "../Config/multer";
import TAG_DEFINE from "../Constant/define";
import { ProductFactory } from "../Factory/Creator/ProductFactory";
import CommonFunction from "../Utils/function";

export const validateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const type = req.headers["type"];

    if (type === TAG_DEFINE.STORE.AA_PET) {
        next();
    } else {
        const productFactory = ProductFactory.createProduct(
            { ...req.body , ...(req as any).files},
            type as string
        );
        const existingProduct = await ProductFactory.getSchema(type).findOne({name: (productFactory as any).name});
        const isValidExisting = !existingProduct;
        const isValidName =
            !!(productFactory as any)?.name &&
            (productFactory as any)?.name !== "" &&
            !!(!CommonFunction.checkSpicialCharacter((productFactory as any)?.name));

        const isValidQuantity = (productFactory as any).quantity > 0;
        const isValidPrice = (productFactory as any).price > 0;
        const isValidMainThumb =
            (req as any).files &&
            Object.keys((req as any).files).length > 0;
        switch(false){
            case isValidName: return CommonFunction.responseBadRequest(TAG_DEFINE.VALIDATION.PRODUCT.name, res);
            case isValidQuantity: return CommonFunction.responseBadRequest(TAG_DEFINE.VALIDATION.PRODUCT.quantity, res);
            case isValidPrice: return CommonFunction.responseBadRequest(TAG_DEFINE.VALIDATION.PRODUCT.price, res);
            case isValidMainThumb: return CommonFunction.responseBadRequest(TAG_DEFINE.VALIDATION.PRODUCT.mainThumb, res);
            case isValidExisting: return CommonFunction.responseBadRequest(TAG_DEFINE.VALIDATION.PRODUCT.existing, res);
            default: next();
        }
    }
};
