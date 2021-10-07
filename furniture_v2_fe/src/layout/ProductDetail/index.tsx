import React from "react";
import Wrapper from "../../Component/Wrapper";
import PageLayout from '../../Component/PageLayout';
import DetailThumbnail from "./detailThumb";
import ProductInfo from "./productInfo";

const ProductDetail: React.FC = (props) => {
    return <Wrapper className="pt-5" style={{backgroundImage: "url(/define/banner1.png)", backgroundSize: "cover"}}>
            <PageLayout 
                // title="Chi tiết sản phẩm"
                breadcrumb 
                breadcrumpClassname="m-0 ml-5">
                    <Wrapper className="row ml-0 p-5">
                        <Wrapper className="col-6">
                            <DetailThumbnail/>
                        </Wrapper>
                        <Wrapper className="col-6">
                            <ProductInfo/>
                        </Wrapper>
                    </Wrapper>
            </PageLayout>
        </Wrapper>
}

export default ProductDetail;