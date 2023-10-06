import { put, takeEvery } from 'redux-saga/effects'
import { addCashAction, withdrawCashAction } from 'store/cashReducer'
import { CashActions } from 'types/declarations'

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
    yield takeEvery(CashActions.ADD_CASH, incrementWorker)
    yield takeEvery(CashActions.WITHDRAW_CASH, decrementWorker)
}
