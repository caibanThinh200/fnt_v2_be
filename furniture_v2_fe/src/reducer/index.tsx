import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

export default combineReducers({
    authReducer,
    categoryReducer,
    productReducer
})