const PATH: any = {
    APP: {
        start: "/",
        params: "/:params",
        404: "*",
    },
    USER: {},
    PRODUCT: {
        baseURL: "/product",
    },
    AUTH: {
        baseURL: "/auth",
        login: "/login",
        register: "/register",
    },
};

export default PATH;