import { combineReducers, createStore } from 'redux'
import { cashReducer } from 'store/cashReducer'
import { customerReducer } from 'store/customerReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})
export const store = createStore(rootReducer, composeWithDevTools())
