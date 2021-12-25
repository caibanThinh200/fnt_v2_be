const PATH: any = {
    APP: {
        start: "/",
        params: "/:params",
        404: "*",
        upload: "/fnt-media",
    },
    PRODUCT: {
        baseURL: "/product",
        init: "/init",
        excel: "/excel",
        filter: "/filter",
        detail: "/detail/:id",
    },
    PRODUCT_TYPE: {
        baseURL: "/product-type",
        detail: "/detail/:id",
        all: "/all",
        count: "/count",
        excel: "/excel"
    },
    CATEGORY: {
        baseURL: "/cate",
        child: "/child/:categoryId",
        detailChild: "/child/:categoryId/:categoryDetailId",
        deleteChild: "/child/:categoryId/:categoryDetailId",
    },
    CATEGORY_DETAIL: {
        baseURL: "/cate-detail",
    },
    AUTH: {
        detail: "/detail/:id",
        baseURL: "/auth",
        login: "/login",
        register: "/register",
        infoJWT: "/token",
    },
    SOCIAL_MEDIA: {
        baseURL: "/media",
    },
    BILL: {
        baseURL: "/bill",
    },
    ACCESSORY: {
        baseURL: "/accessory",
        all: "/all",
    },
};

export default PATH;