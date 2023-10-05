import { all } from 'redux-saga/effects'
import { userWatcher } from 'asyncActions/saga/userSaga'
import { cashWatcher } from 'asyncActions/saga/cashSaga'

export function * mainWatcher () {
    yield all([cashWatcher(), userWatcher()])
}
