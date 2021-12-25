import ProductRoute from "./Product.routes";
import AuthRoute from "./Auth.routes";
import CateRoute from "./Category.routes";
import SocialMediaRoute from "./SocialMedia.routes";
import BillRoute from "./Bill.routes";
import ProductTypeRoute from "./ProductType.routes";
import AccessoryRoute from "./Accessory.routes";
import { Express } from "express";
import PATH from "../Constant/url";

export default (app: Express) => {
    app.use(PATH.PRODUCT.baseURL, ProductRoute);
    app.use(PATH.PRODUCT_TYPE.baseURL, ProductTypeRoute);
    app.use(PATH.CATEGORY.baseURL, CateRoute);
    app.use(PATH.AUTH.baseURL, AuthRoute);
    app.use(PATH.SOCIAL_MEDIA.baseURL, SocialMediaRoute);
    app.use(PATH.BILL.baseURL, BillRoute);
    app.use(PATH.ACCESSORY.baseURL, AccessoryRoute);
};
