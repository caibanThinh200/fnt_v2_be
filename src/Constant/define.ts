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
        CATEGORY_DETAIL: "CategoryDetail",
        BILL: "Bill",
        SOCIAL_MEDIA: "Social media",
        ACCESSORY: "Accessory",
        PRODUCT_TYPE: "Product-type",
        MONTH_REVENUE: "Month-revenue",
        ORDER: "Order"
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
    },
    ERROR: {
        start: "Server failed",
        404: "%s not found",
        401: "Invalid %s",
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
            delete: "Xóa sản phẩm",
        },
        PRODUCT_TYPE: {
            create: "Thêm loại sản phẩm",
            getCount: "Lấy số lượng sản phẩm",
            getList: "Lấy danh sách loại sản phẩm",
            update: "Cập nhật loại sản phẩm",
            getDetail: "Lấy chi tiết loại sản phẩm",
            delete: "Xóa loại sản phẩm",
        },
        CATEGORY: {
            create: "Thêm danh mục",
            getList: "Lấy danh sách danh mục",
            update: "Cập nhật danh mục",
            getDetail: "Lấy chi tiết danh mục",
            delete: "Xóa danh mục",
        },
        CATEGORY_DETAIL: {
            create: "Thêm chi tiết danh mục",
            getList: "Lấy danh sách chi tiết danh mục",
            update: "Cập nhật chi tiết danh mục",
            getDetail: "Lấy chi tiết danh mục",
            delete: "Xóa chi tiết danh mục",
        },
        AUTH: {
            getDetail: "Lấy chi tiết tài khoản",
            update: "Cập nhật tài khoản",
            LOGIN: {
                success: "Đăng nhập",
                failed: "Đăng nhập",
                exist: "Tài khoản hoặc mật khẩu không đúng",
            },
            REGISTER: "Đăng ký",
            CHANGE_PASSWORD: "Đổi mật khẩu"
        },
        SOCIAL_MEDIA: {
            create: "Thêm mạng xã hội",
            getList: "Lấy danh sách mạng xã hội",
            update: "Cập nhật mạng xã hội",
            getDetail: "Lấy chi tiết mạng xã hội",
        },
        BILL: {
            create: "Thêm hóa đơn",
            getList: "Lấy danh sách hóa đơn",
            update: "Cập nhật hóa đơn",
            getDetail: "Lấy chi tiết hóa đơn",
            delete: "Xóa hóa đơn",
        },
        ACCESSORY: {
            create: "Thêm thuộc tính sản phẩm",
            getList: "Lấy danh sách thuộc tính sản phẩm",
            update: "Cập nhật thuộc tính sản phẩm",
            getDetail: "Lấy chi tiết thuộc tính sản phẩm",
            delete: "Xóa thuộc tính sản phẩm"
        },
        MONTH_REVENUE: {
            create: "Thêm doanh thu tháng",
            getList: "Lấy danh sách doanh thu tháng",
            update: "Cập nhật doanh thu tháng",
            getDetail: "Lấy chi tiết doanh thu tháng",
            delete: "Xóa doanh thu tháng"
        },
        ORDER: {
            create: "Thêm đơn hàng",
            getList: "Lấy danh sách đơn hàng",
            update: "Cập nhật đơn hàng",
            getDetail: "Lấy chi tiết đơn hàng",
            delete: "Xóa đơn hàng"
        }
    },
    STORE: {
        FURNITURE: "Furniture",
        AA_PET: "aa-pet",
    },
    VALIDATION: {
        USER: {
            name: "Họ tên không hợp lệ",
            phone: "SDT không hợp lệ",
            address: "Địa chỉ không hợp lệ",
            password: "Mật khẩu không hợp lệ",
            passwordUpperCase: "Mật khẩu phải có ít nhất 1 ký tự ghi hoa",
            passwordHasNumber: "Mật khẩu phải có ít nhất 1 ký tự số",
            passwordLength: "Mật khẩu phải có độ dài từ 4 đến 10",
            email: "Email không hợp lệ",
            unavailableEmail: "Email đã được đăng ký",
            unavailablePhone: "SDT đã được sử dụng",
            invalidUser: "Email hoặc mật khẩu không hợp lệ",
        },
        PRODUCT: {
            name: "Tên sản phẩm không hợp lệ",
            price: "Giá sản phẩm không hợp lệ",
            quantity: "Số lượng sản phẩm không hợp lệ",
            mainThumb: "Ảnh đại diện không hợp lệ",
            existing: "Tên sản phẩm đã tồn tại"
        },
    },
};

export const DEFINE_INFOMATION = {
    PRODUCT_EXCEL: "UploadFiles/product.xlsx",
    PRODUCT_TYPE_EXCEL: "UploadFiles/type.xlsx"
}

export default TAG_DEFINE;