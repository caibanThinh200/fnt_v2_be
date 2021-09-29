const PATH: any = {
    APP: {
        start: "/",
        params: "/:params",
        404: "*",
        upload: "/fnt-media"
    },
    PRODUCT: {
        baseURL: "/product"
    },
    CATEGORY: {
        baseURL: "/cate"
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