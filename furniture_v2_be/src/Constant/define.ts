const TAG_DEFINE = {
    SERVER: {
        start: "Server is running on port %s",
    },
    SCHEMA: {
        USER: "User",
        VOUCHER: "Voucher",
        GIFT: "Gift",
        PAYMENT: "Payment",
        PRODUCT: "Product",
        IMAGE: "Image",
        CATEGORY: "Category",
        BILL: 'Bill'
    },
    SERVICE: {
        start: "WELCOME TO AZP SERVER",
        SOCIAL: {
            web: "WEB",
            facebook: "FACEBOOK",
            instagram: "INSTAGRAM",
        },
        PAYMENT: {
            cash: "CASH",
            visa: "VISA",
            momo: "MOMO",
        },
    },
    STATUS: {
        active: "active",
        unactive: "unactive",
        sucess: "SUCCESS",
        failed: "FAILED",
    },
    CODE: {
        PAYMENT: {
            cash: "CA",
            visa: "VS",
            momo: "MO",
        },
        404: "%s not found",
    },
    ERROR: {
        start: "Server failed",
    },
    RESULT: {
        200: " thành công",
        500: " thất bại",
        DATABASE: {
            connect: {
                success: "Database connection success",
                failed: "Database connection failed",
            },
        },
        PRODUCT: {
            create: "Thêm sản phẩm",
            getList: "Lấy danh sách sản phẩm",
            update: "Cập nhật sản phẩm",
            getDetail: "Lấy chi tiết sản phẩm",
            delete: "Xóa sản phẩm"
        },
        CATEGORY: {
            create: "Thêm danh mục",
            getList: "Lấy danh sách danh mục",
            update: "Cập nhật danh mục",
            getDetail: "Lấy chi tiết danh mục",
            delete: "Xóa danh mục"
        },
        AUTH: {
            LOGIN: {
                success: "Đăng nhập thành công",
                failed: "Đăng nhập",
            },
            REGISTER: {
                success: "Đăng ký thành công",
                failed: "Đăng ký",
            },
        },
        BILL: {
            CREATE: "Tạo hóa đơn",
            GET_LIST: "Lấy danh sách hóa đơn",
            GET_DETAIL: "Lấy hóa đơn",
            UPDATE: "Cập nhật hóa đơn",
            DELETE: "Xóa hóa đơn"
        }
    },
    STORE: {
        FURNITURE: "furniture",
        AA_PET: "aa-pet",
    },
};

export default TAG_DEFINE;