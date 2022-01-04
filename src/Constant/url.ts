const PATH = {
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
        categoryId: "/cate/:categoryId",
        categoryDetailId: "/cate-detail/:category_detail_id",
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
        change_password: '/update/change-password'
    },
    SOCIAL_MEDIA: {
        baseURL: "/media",
    },
    BILL: {
        baseURL: "/bill",
        filter: "/filter",
        nonAuthDetail: "/non-auth/detail/:id",
        revenue: '/revenue'
    },
    ACCESSORY: {
        baseURL: "/accessory",
        all: "/all",
    },
    GENERAL: {
        baseURL: "/general",
    },
    ORDER: {
        baseURL: '/order',
        param: '/:orderId',
        myOrder: '/my-order'
    }
};

export default PATH;