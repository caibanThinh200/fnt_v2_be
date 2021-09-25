import { Card } from "antd";
import clsx from "clsx";
import { Fragment } from "react";
import Wrapper from "../../../Component/Wrapper";
import { getRestProps } from "../../../Util/functions";

interface Props extends Omit<getRestProps, "restProps"> {

}

const ProductItem: React.FC<Props> = props => {
    const { Meta } = Card
    return (
        <Card
            {...props}
            className={clsx(props.className)}
            hoverable
            style={{ width: 240 }}
            cover={<Wrapper className="container">
                <img className="w-75 mt-3 ml-3" alt="example" src="/define/71vbR3+AzaL._AC_SX466_.jpg" />
            </Wrapper>}
        >
            <Meta title="Europe Street beat" description={
                <Fragment>
                    <span className="h6 ml-2">Erconomic chair</span>
                    <button className="btn btn-success ml-2 mt-3">Thêm vào giỏ</button>
                </Fragment>
            } />
            
        </Card>
    )
}

export default ProductItem;