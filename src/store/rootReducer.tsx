import { combineReducers } from 'redux'
import { cashReducer } from 'store/cashReducer'
import { customerReducer } from 'store/customerReducer'

export const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

export type RootState = ReturnType<typeof rootReducer>
