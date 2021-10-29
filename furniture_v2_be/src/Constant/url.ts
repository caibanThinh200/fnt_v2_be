const PATH: any = {
    APP: {
        start: "/",
        params: "/:params",
        404: "*",
        upload: "/fnt-media"
    },
    PRODUCT: {
        baseURL: "/product",
        excel: "/excel",
        filter: "/filter",
        detail: "/detail/:id"
    },
    PRODUCT_TYPE: {
        baseURL: "/product-type",
    },
    CATEGORY: {
        baseURL: "/cate"
    },
    CATEGORY_DETAIL: {
        baseURL: "/cate-detail"
    },
    AUTH: {
        detail: "/detail/:id",
        baseURL: "/auth",
        login: "/login",
        register: "/register",
        infoJWT: "/token"
    },
    SOCIAL_MEDIA: {
        baseURL: "/media",
    },
    BILL: {
        baseURL: "/bill"
    }
};

export default PATH;