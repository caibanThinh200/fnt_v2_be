import { Divider } from "antd";
import ProductDemo from "../../Component/ProductDemo";
import Wrapper from "../../Component/Wrapper";
import TAG_DEFINE from "../../constant/tagDefine";
import { getRestProps } from "../../Util/functions";
import { ReactComponentProps } from '../../Util/inteface';

const ProductRevenue: React.FC<ReactComponentProps> = props => {
    return (
        <Wrapper className="container">
            <ProductDemo {...props}
                title={TAG_DEFINE.PAGE.HOMEPAGE.BEST_DISCOUNT}
            />
            <Divider className="mt-5 mb-5"/>
            <ProductDemo {...props}
                title={TAG_DEFINE.PAGE.HOMEPAGE.BEST_SALED}
            />
            <Divider className="mt-5 mb-5"/>
            <ProductDemo {...props}
                title={TAG_DEFINE.PAGE.HOMEPAGE.LATEST}
            />
        </Wrapper>
       
    )
}

export default ProductRevenue;