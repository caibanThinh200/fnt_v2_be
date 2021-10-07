import Wrapper from "../../Component/Wrapper";
import PageLayout from "../../Component/PageLayout";
import { Fragment, useState, useEffect } from "react";
import Categories from "./Categories";
import "../../style/product.scss"
import clsx from "clsx";
import ProductList from "./ProductList/ProductList";
import TAG_DEFINE from "../../constant/tagDefine";
import { getRestProps } from "../../Util/functions";
import { Action, Dispatch } from 'redux';
import { getListAllCategoryAction } from '../../action/categoryAction';
import { connect } from "react-redux";
import { getListAllProductAction } from '../../action/productAction';
import React from 'react'

interface Props extends Omit<getRestProps, "restProps"> {

}

const Product: React.FC<Props> = props => {
    const [filterSelected, setFilterSelected] = useState({tag: ""}),
    [tagResult, setTagResult] = useState({key: "", title: ""}),
    [currentBranch, setCurrentBranch] = useState([]);

    useEffect(() => {
        props.getListAll();
        props.getListProduct();
    }, []);

    const onFilterChange = (e: any) => {
        setFilterSelected({
            tag: e.path
        });   
    }

    const onExpandChange = (e: any) => {
        if(tagResult.key) {
            if(tagResult.key.includes(e.keys[e.keys.lenght-1])) {
                setTagResult({
                    key: e.keys,
                    title: tagResult.title && `${tagResult.title} -> ${e.title}`
                });
            } else {
                setTagResult({
                    key: e.keys,
                    title: e.title
                });
            }
        } else {
            setTagResult({
                key: e.keys,
                title: e.title
            });
        }
        setCurrentBranch(e.tabInfo.node.children.map((item: any) => ({
                    title: item.title,
                    key: item.key
                })
            )
        );
    }

    return (
        <Wrapper className={clsx(props.className, "pt-5")}>
            <PageLayout
                sider={<Categories {...props}
                        onExpandChange={onExpandChange} 
                        onFilterChange={onFilterChange}
                    />}
                title={TAG_DEFINE.PAGE.PRODUCT.title}
                contentClassname="ml-5"
                breadcrumb
            >
                <ProductList {...props} 
                    pagination 
                    tagResult={tagResult} 
                    filterResult={filterSelected}/>
            </PageLayout>
        </Wrapper>
    )
}

const mapStateToProps = (state: any) => ({
    categories: state.categoryReducer.categories,
    products: state.productReducer.products
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getListAll: (data: any) => dispatch(getListAllCategoryAction()),
    getListProduct: (data: any) => dispatch(getListAllProductAction())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Product);