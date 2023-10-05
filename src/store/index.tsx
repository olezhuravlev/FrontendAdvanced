import { applyMiddleware, combineReducers, createStore } from 'redux'
import { cashReducer } from 'store/cashReducer'
import { customerReducer } from 'store/customerReducer'
import createSagaMiddleware from 'redux-saga'
import { mainWatcher } from 'asyncActions/saga/main'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mainWatcher)
