import Homepage from "../layout/Home/index";
import Product from "../layout/Product/index";
import Cart from "../layout/Checkout/index";
import ProductDetail from '../layout/ProductDetail/index';

export const ROUTES: any = {
    HOMEPAGE: {
        breadcrump: "Trang chủ",
        exact: true,
        path: "/",
        component: (props: any) => <Homepage {...props}/>
    },
    PRODUCT: {
        breadcrump: "Sản phẩm",
        exact: true,
        path: "/product",
        component: (props: any) => <Product {...props}/>
    },
    CART: {
        breadcrump: "Giỏ hàng",
        exact: true,
        path: "/cart",
        component: (props: any) => <Cart {...props}/>
    },
    PRODUCT_DETAIL: {
        breadcrump: "Chi tiết sản phẩm",
        exact: true,
        path: "/product/:slug",
        component: (props: any) => <ProductDetail {...props}/>
    }
}