import {createReducer} from "@reduxjs/toolkit"
import { registerAction, loginAction, registerActionSuccess, loginActionSuccess, logoutActionSuccess, logoutAction, checkUserAction, checkUserSuccess } from '../action/authAction';

const initialState  = {
    isSubmit: false,
    isFetching: false,
    info: null,
    isRegistered: false,
    isLogged: false
}

export default createReducer(initialState, reducer => {
    reducer
        .addCase(registerAction, (state, action) => ({...state, isFetching: true, isSubmit: true}))
        .addCase(loginAction, (state, action) => ({...state, isFetching: true, isSubmit: true}))
        .addCase(logoutAction, (state, action) => ({...state, isFetching:true, isSubmit: true}))
        .addCase(checkUserAction, (state, action) => ({...state, isFetching: true}))
        .addCase(registerActionSuccess, (state, action) => ({...state, isFetching: false, isSubmit: false, isRegistered: true}))
        .addCase(loginActionSuccess, (state, action) => ({...state, isFetching: false, isSubmit: false, isLogged: true}))
        .addCase(logoutActionSuccess, (state, action) => ({...state, isFetching: false, isSubmit: false, isLogged: false, isRegistered: false, info: null}))
        .addCase(checkUserSuccess, (state, action) => ({...state, isFetching: false, isSubmit: false, isLogged: true, isRegistered: false, info: (action as any).payload}))
});