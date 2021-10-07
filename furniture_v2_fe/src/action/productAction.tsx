import Types from "../constant/Types/productType";
import {createAction} from "@reduxjs/toolkit"

export const createProductAction = createAction(Types.CREATE_PRODUCT_ACTION, (data: any) => ({payload: data || {}}));
export const getListAllProductAction = createAction(Types.GET_LIST_PRODUCT_ALL_ACTION);
export const getDetailProductAction = createAction(Types.GET_DETAIL_PRODUCT_ACTION, (id: any) => ({payload: id || {}}));
export const updateProductAction = createAction(Types.UPDATE_PRODUCT_ACTION, (id: string, data: any) => ({payload: {...data, params: id}}))
export const createProductSuccess = createAction(Types.CREATE_PRODUCT_SUCCESS, (data: any) => ({payload: data || {}}));
export const getListAllProductSuccess = createAction(Types.GET_LIST_PRODUCT_ALL_SUCCESS);
export const getDetailProductSuccess = createAction(Types.GET_DETAIL_PRODUCT_SUCCESS, (id: any) => ({payload: id || {}}));
export const updateProductSuccess = createAction(Types.UPDATE_PRODUCT_SUCCESS, (id: string, data: any) => ({payload: {...data, params: id}}))
