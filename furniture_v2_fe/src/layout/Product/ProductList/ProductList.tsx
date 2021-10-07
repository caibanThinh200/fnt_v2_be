import { Pagination, Tag } from "antd";
import { Fragment, useEffect, useState } from "react";
import Wrapper from "../../../Component/Wrapper";
import TAG_DEFINE from "../../../constant/tagDefine";
import ProductItem from "./ProductItem";
import { getRestProps } from "../../../Util/functions";
import { ReactComponentProps } from '../../../Util/inteface';

const ProductList: React.FC<ReactComponentProps> = props => {
    const [filterResult, setFilterResult] = useState({tag: ""}),
    [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        setListProduct(props.products);
    }, [props.products])

    useEffect(() => {
        setFilterResult(props.filterResult);
    }, [props.filterResult])

    return (
        <Wrapper className="row"> 
            {
                filterResult.tag && <Wrapper className="col-12 mb-5">
                    <span className="h4 mb-5">Kết quả tìm kiếm: </span>
                    <Tag color="#2db7f5" className="h4 p-2 mt-n5 ml-2">
                        {
                            filterResult.tag
                        }
                    </Tag> 
                </Wrapper>
            }
            {
                listProduct.length > 0 && listProduct.map((item, index) => 
                    <ProductItem key={index} fields={item} className="col-3 mr-5 mb-5"/>
                )
            }
            <Wrapper className="ml-5">
                {
                    props.pagination && 
                        <Pagination 
                            defaultCurrent={6} 
                            total={500}/>
                }
            </Wrapper>
        </Wrapper>
    )
}

export default ProductList;