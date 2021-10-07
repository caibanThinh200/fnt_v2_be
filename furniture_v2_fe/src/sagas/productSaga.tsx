import * as Func from "../Util/functions";
import { takeLatest, all, put, call, fork } from 'redux-saga/effects';
import Types from "../constant/Types/productType";
import { getListService } from "../Service/productService";
import { message } from 'antd';
import TAG_DEFINE from '../constant/tagDefine';

function* getList(): Generator {
    yield takeLatest(Types.GET_LIST_PRODUCT_ALL_ACTION, Func.sagaWrapper(function*(action): Generator {
        const listProduct = yield call(getListService);
        if((listProduct as any).status === "SUCCESS" && (listProduct as any).result) {
            yield put({type: Types.GET_LIST_PRODUCT_ALL_SUCCESS, payload: (listProduct as any).result})
        } else if((listProduct as any).status === "FAILED" && (listProduct as any).error) {
            message.error(TAG_DEFINE.ERROR[500], 5)
        }
    }, errorHandle(Types.GET_LIST_PRODUCT_ALL_FAILED)))
}

function errorHandle(errorActionType: any) {
    return Func.sagaErrorHandler(function* (e: any): Generator {
        yield put({ type: errorActionType })
    });
}

export function* productSaga(): Generator {
    yield all([
        fork(getList)
    ])
}