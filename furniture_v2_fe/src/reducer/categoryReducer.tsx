import {createReducer} from '@reduxjs/toolkit';
import { createCategoryAction, getListAllCategoryAction, getDetailCategoryAction, updateCategoryAction, getListAllCategorySuccess, getDetailCategorySuccess, updateCategorySuccess, createCategorySuccess } from '../action/categoryAction';


const initialState = {
    isCategoryFetching: false,
    categories: {},
    item: {},
    isSubmit: false,
    isUpdate: false
}

export default createReducer(initialState, reducer => {
    reducer
        .addCase(createCategoryAction, (state, action) => ({...state, isCategoryFetching: true}))
        .addCase(getListAllCategoryAction, (state, action) => ({...state, isCategoryFetching: true}))
        .addCase(getDetailCategoryAction, (state, action) => ({...state, isCategoryFetching: true}))
        .addCase(updateCategoryAction, (state, action) => ({...state, isCategoryFetching: true}))
        .addCase(createCategorySuccess, (state, action) => ({...state, isCategoryFetching: false}))
        .addCase(getListAllCategorySuccess, (state, action) => ({...state, isCategoryFetching: false, categories: (action as any).payload}))
        .addCase(getDetailCategorySuccess, (state, action) => ({...state, isCategoryFetching: false}))
        .addCase(updateCategorySuccess, (state, action) => ({...state, isCategoryFetching: false}))
})