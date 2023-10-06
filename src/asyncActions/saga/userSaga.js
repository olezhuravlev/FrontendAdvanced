import { call, put, takeEvery } from 'redux-saga/effects'
import { addCustomersAction } from 'store/customerReducer'
import { CustomerActions } from 'types/declarations'

const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms))
const fetchUsers = async (id) => await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

let currentId = 1

function * fetchUserWorker () {
    yield delay(500)
    const data = yield call(fetchUsers, currentId++)
    const json = yield call(async () => await new Promise(resolve => {
        resolve(data.json())
    }))
    console.log('fetchUserWorker!', json)
    if (currentId <= 10) {
        yield put(addCustomersAction([json]))
    }
}

export function * userWatcher () {
    yield takeEvery(CustomerActions.ADD_CUSTOMERS, fetchUserWorker)
}
