import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { mainWatcher } from 'asyncActions/saga/main'
import { rootReducer } from 'store/rootReducer'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'

const sagaMiddleware = createSagaMiddleware()

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mainWatcher)
