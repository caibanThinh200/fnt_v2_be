"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PATH = {
    APP: {
        start: "/",
        params: "/:params",
        404: "*",
    },
    PRODUCT: {
        baseURL: "/product"
    },
    CATEGORY: {
        baseURL: "/cate"
    },
    AUTH: {
        baseURL: "/auth",
        login: "/login",
        register: "/register",
    },
    SOCIAL_MEDIA: {
        baseURL: "/media",
    },
    BILL: {
        baseURL: "/bill"
    }
};
exports.default = PATH;
