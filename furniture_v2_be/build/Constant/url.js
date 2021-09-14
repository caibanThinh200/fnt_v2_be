"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PATH = {
    APP: {
        start: "/",
        params: "/:params",
        404: "*"
    },
    USER: {},
    PRODUCT: {
        baseURL: "/product"
    }
};
exports.default = PATH;
