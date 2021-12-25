import React from "react";
import Wrapper from "../../Component/Wrapper";
import PageLayout from '../../Component/PageLayout';
import Tab from '../../Component/Tab'
import DetailThumbnail from "./detailThumb";
import ProductInfo from "./productInfo";
import DetailTab from './detailTab'
import DescriptionTab from "./DescriptionTab";
const ProductDetail: React.FC = (props) => {
    return <Wrapper className="pt-5 pb-5" style={{backgroundImage: "url(/define/banner1.png)", backgroundSize: "cover"}}>
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
                        <Wrapper className="col-12">
                            <Tab tabsPane={[
                                {
                                    component: <DetailTab/>,
                                    key: 'detail',
                                    tab: <h5>Thông số sản phẩm</h5>
                                },
                                {
                                    component: <DescriptionTab/>,
                                    key: 'description',
                                    tab: <h5>Giới thiệu sản phẩm</h5>
                                }
                            ]}/>
                        </Wrapper>
                    </Wrapper>
            </PageLayout>
        </Wrapper>
}

export default ProductDetail;