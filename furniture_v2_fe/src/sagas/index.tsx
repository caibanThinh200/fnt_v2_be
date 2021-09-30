import { all } from "redux-saga/effects"

import { authSaga } from "./authSaga";

export default function*(): Generator {
    yield all([
        authSaga()
    ])
}
