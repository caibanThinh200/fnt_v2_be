import { Card } from "antd";
import clsx from "clsx";
import { Fragment } from "react";
import Wrapper from "../../../Component/Wrapper";
import { getRestProps } from "../../../Util/functions";
import { ReactComponentProps } from '../../../Util/inteface';

const ProductItem: React.FC<ReactComponentProps> = props => {
    const { Meta } = Card
    return (
        <Card
            {...props}
            className={clsx(props.className, "justify-content-between")}
            hoverable
            style={{ width: 240 }}
            cover={<Wrapper className="container d-flex justify-content-center">
                <img className="w-75 mt-4" alt="example" src="/define/71vbR3+AzaL._AC_SX466_.jpg" />
            </Wrapper>}
        >
            <Meta className="text-center" title={props.fields.name} description={
                <Fragment>
                    <span className="h6 ml-2">{props.fields.price} VND</span>
                    <button className="btn btn-success ml-2 mt-3">Thêm vào giỏ</button>
                </Fragment>
            } />
            
        </Card>
    )
}

export default ProductItem;