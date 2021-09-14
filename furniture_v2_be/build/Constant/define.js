"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TAG_DEFINE = {
    SERVER: {
        start: "Server is running on port %s"
    },
    SCHEMA: {
        USER: "User",
        VOUCHER: "Voucher",
        GIFT: "Gift",
        PAYMENT: "Payment",
        PRODUCT: "Product"
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
            momo: "MOMO"
        }
    },
    STATUS: {
        active: "active",
        unactive: "unactive",
        sucess: "SUCCESS",
        failed: "FAILED"
    },
    CODE: {
        PAYMENT: {
            cash: "CA",
            visa: "VS",
            momo: "MO"
        },
        404: "%s not found"
    },
    ERROR: {
        start: "Server failed"
    },
    RESULT: {
        200: " thành công",
        500: " thất bại",
        DATABASE: {
            connect: {
                success: "Connection success",
                failed: "Connection failed"
            }
        },
        PRODUCT: {
            create: "Thêm sản phẩm",
            getList: "Lấy danh sách sản phẩm"
        }
    }
};
exports.default = TAG_DEFINE;
