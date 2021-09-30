import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import furnitureReducer from "../reducer/index";
import furnitureSaga from "../sagas/index";
import createSagaMiddlWare, { SagaMiddleware } from "redux-saga"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

let store: Store;
const sagaMiddleWare: SagaMiddleware = createSagaMiddlWare();
const persistConfig = {
    key: "ftn_store",
    storage
}
const persistReducers = persistReducer(persistConfig, furnitureReducer);

if (process.env.REACT_APP_ENVIRONMENT === "production" || process.env.REACT_APP_ENVIRONMENT === "staging") {
    store = createStore(persistReducers, applyMiddleware(sagaMiddleWare));
} else {
    const composeEnhancers = typeof window === 'object' && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    store = createStore(persistReducers, composeEnhancers(applyMiddleware(sagaMiddleWare)));
}

export const persistor = persistStore(store);
export default store;

sagaMiddleWare.run(furnitureSaga);