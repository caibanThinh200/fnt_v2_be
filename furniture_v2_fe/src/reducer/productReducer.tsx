import {createReducer} from '@reduxjs/toolkit';
import { createProductAction, getListAllProductAction, getDetailProductAction, updateProductAction, getListAllProductSuccess, getDetailProductSuccess, updateProductSuccess, createProductSuccess } from '../action/productAction';


const initialState = {
    isProductFetching: false,
    products: {},
    item: {},
    isSubmit: false,
    isUpdate: false
}

export default createReducer(initialState, reducer => {
    reducer
        .addCase(createProductAction, (state, action) => ({...state, isProductFetching: true}))
        .addCase(getListAllProductAction, (state, action) => ({...state, isProductFetching: true}))
        .addCase(getDetailProductAction, (state, action) => ({...state, isProductFetching: true}))
        .addCase(updateProductAction, (state, action) => ({...state, isProductFetching: true}))
        .addCase(createProductSuccess, (state, action) => ({...state, isProductFetching: false}))
        .addCase(getListAllProductSuccess, (state, action) => ({...state, isProductFetching: false, products: (action as any).payload}))
        .addCase(getDetailProductSuccess, (state, action) => ({...state, isProductFetching: false}))
        .addCase(updateProductSuccess, (state, action) => ({...state, isProductFetching: false}))
})