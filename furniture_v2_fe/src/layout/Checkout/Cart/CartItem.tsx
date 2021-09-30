import { Divider, InputNumber, Space, Tag } from "antd";
import Wrapper from "../../../Component/Wrapper";
import Image from "../../../Component/Image";
import Input from "../../../Component/Input";
import Icon from "../../../Component/Icon";
import clsx from "clsx";

const CartItem = (props: any) => {
    return (
        <Wrapper hoverable className={clsx("bg-body rounded border row mb-5", props.className)}>
            <Wrapper className="col-3 p-0 rounded">
                 <img
                    src="/define/c0297ca755b51b8572f4f28d18293b0b.jpg"
                    className="w-100 h-100"
                />
            </Wrapper>
            <Wrapper className="col-6 p-3">
                <Wrapper>
                    <p className="h5 font-monospace font-weight-light">Econormic chair</p>
                    <Wrapper className="mt-3">
                        <span>Giá tiền:</span>
                        <span className="ml-1 font-weight-bold furniture_home__product__price">2.990.000 VND</span>
                    </Wrapper>
                    <Wrapper className="mt-3">
                        <Tag className="p-2" color="#DC143C"><Icon type="delete"/><span className="font-poppins">Xóa sản phẩm</span></Tag>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <Wrapper className="mb-3 col-3 mt-4">
                <p className="h6 font-monospace font-weight-light">Số lượng:</p>
                <Input addonBefore="+" addonAfter="-" defaultValue={1} />
            </Wrapper>
        </Wrapper>
    )
}

export default CartItem;
