import Wrapper from "../../Component/Wrapper";
import PageLayout from "../../Component/PageLayout";
import TAG_DEFINE from "../../constant/tagDefine";
import CartList from "./Cart/CartList";
import "../../style/cart.scss"
import SumarizeBox from "./SumarizeBox";
import ContactBox from "./ContactBox";
import React from 'react'

const Cart: React.FC = props => {
    return (
        <Wrapper>
            <PageLayout title={TAG_DEFINE.PAGE.CART.title} breadcrumb>
                <Wrapper className="row">
                    <Wrapper className="col-7 pl-0">
                        <CartList/>
                    </Wrapper>
                    <Wrapper className="col-5 pr-0">
                        <SumarizeBox/>
                        <ContactBox/>
                    </Wrapper>
                </Wrapper>
            </PageLayout>
        </Wrapper>
    )
}

export default Cart;