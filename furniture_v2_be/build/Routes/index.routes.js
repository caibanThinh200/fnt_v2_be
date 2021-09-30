"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_routes_1 = __importDefault(require("./Product.routes"));
const Auth_routes_1 = __importDefault(require("./Auth.routes"));
const Category_routes_1 = __importDefault(require("./Category.routes"));
const SocialMedia_routes_1 = __importDefault(require("./SocialMedia.routes"));
const Bill_routes_1 = __importDefault(require("./Bill.routes"));
const url_1 = __importDefault(require("../Constant/url"));
exports.default = (app) => {
    app.use(url_1.default.PRODUCT.baseURL, Product_routes_1.default);
    app.use(url_1.default.CATEGORY.baseURL, Category_routes_1.default);
    app.use(url_1.default.AUTH.baseURL, Auth_routes_1.default);
    app.use(url_1.default.SOCIAL_MEDIA.baseURL, SocialMedia_routes_1.default);
    app.use(url_1.default.BILL.baseURL, Bill_routes_1.default);
};
