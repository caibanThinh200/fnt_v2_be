import { Button, Divider, Input } from "antd";
import Wrapper from "../../Component/Wrapper";
import TAG_DEFINE from "../../constant/tagDefine";

const SumarizeBox: React.FC = props => {
    return (
        <Wrapper bordered shadow className="w-100 p-4 mb-3">
            <Wrapper>
                <p className="h4 m-0 furniture-cart__title font-weight-bold">{TAG_DEFINE.PAGE.CART.sumarize}</p>
            </Wrapper>
            <Wrapper className="row mt-5">
                <Wrapper className="col-7">
                    <span className="h5 font-weight-bold">Tên sản phẩm</span>
                </Wrapper>
                <Wrapper className="col-5">
                    <span className="h5 font-weight-bold">Giá tiền</span>
                </Wrapper>
            </Wrapper>
            <Divider className="mt-2"/>
            <Wrapper className="row mt-3">
                <Wrapper className="col-7">
                    Ergonomic chair <span>x 1</span>
                </Wrapper>
                <Wrapper className="col">
                    20000 VND
                </Wrapper>
            </Wrapper>
            <Wrapper className="row mt-3">
                <Wrapper className="col-7">
                    Ergonomic chair <span>x 1</span>
                </Wrapper>
                <Wrapper className="col">
                    20000 VND
                </Wrapper>
            </Wrapper>
            <Wrapper className="row mt-3">
                <Wrapper className="col-7">
                    Ergonomic chair <span>x 1</span>
                </Wrapper>
                <Wrapper className="col">
                    20000 VND
                </Wrapper>
            </Wrapper>
            <Wrapper className="row mt-3">
                <Wrapper className="col-7">
                    Ergonomic chair <span>x 1</span>
                </Wrapper>
                <Wrapper className="col">
                    20000 VND
                </Wrapper>
            </Wrapper>
            <Wrapper className="row mt-3">
                <Wrapper className="col-7">
                    Ergonomic chair <span>x 1</span>
                </Wrapper>
                <Wrapper className="col">
                    20000 VND
                </Wrapper>
            </Wrapper>
            <Wrapper className="row mt-3">
                <Wrapper className="col-7">
                    <Input placeholder={TAG_DEFINE.ACTION.CART.promotionCode.inputCode}/>
                </Wrapper>
                <Wrapper className="col-5">
                    <Button type="primary">{TAG_DEFINE.ACTION.CART.promotionCode.submitCode}</Button>
                </Wrapper>
            </Wrapper>
            
            <Divider/>
            {/* <Wrapper className="row mt-3">
                <Wrapper className="col-4">
                    Mã giảm giá
                </Wrapper>
                <Wrapper className="col row">
                    <Input className="col"/>
                    <Button type="primary" className="col">Áp dụng</Button>
                </Wrapper>
            </Wrapper> */}
            <Wrapper className="row mt-3">
                <Wrapper className="col-7">
                   <span className="h6 font-weight-bold">VAT</span>
                </Wrapper>
                <Wrapper className="col">
                    10%
                </Wrapper>
            </Wrapper>
            <Wrapper className="row mt-3">
                <Wrapper className="col-7">
                    <span className="h6 font-weight-bold">Phí ship</span>
                </Wrapper>
                <Wrapper className="col">
                    20000 VND
                </Wrapper>
            </Wrapper>
            <Wrapper className="row mt-3">
                <Wrapper className="col-7">
                    <span className="h6 font-weight-bold">Tổng cộng</span>
                </Wrapper>
                <Wrapper className="col">
                    200000 VND
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default SumarizeBox; 