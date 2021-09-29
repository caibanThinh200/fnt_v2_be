const PATH: any = {
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
    CATEGORY_DETAIL: {
        baseURL: "/cate-detail"
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

export default PATH;