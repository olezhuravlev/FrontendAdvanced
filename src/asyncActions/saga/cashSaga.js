import { put, takeEvery } from 'redux-saga/effects'
import { ADD_CASH, addCashAction, WITHDRAW_CASH, withdrawCashAction } from 'store/cashReducer'

const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms))

function * incrementWorker () {
    yield delay(1000)
    yield put(addCashAction(3))
}

function * decrementWorker () {
    yield delay(1200)
    yield put(withdrawCashAction(2))
}

export function * cashWatcher () {
    yield takeEvery(ADD_CASH, incrementWorker)
    yield takeEvery(WITHDRAW_CASH, decrementWorker)
}
