import { type Action } from 'redux'

interface State {
    cash: number
}

const defaultState: State = {
    cash: 0
}

export interface CashAction extends Action {
    payload: number
}

export const ADD_CASH = 'ADD_CASH'
export const WITHDRAW_CASH = 'WITHDRAW_CASH'

export const cashReducer = (state: State = defaultState, action: CashAction) => {
    switch (action.type) {
        case ADD_CASH:
            console.log('REDUCER state:', state.cash, 'ADD_CASH payload:', action.payload)
            return { ...state, cash: state.cash + action.payload }
        case WITHDRAW_CASH:
            console.log('REDUCER state:', state.cash, 'WITHDRAW_CASH payload:', action.payload)
            return { ...state, cash: state.cash - action.payload }
        default:
            return state
    }
}

export const addCashAction = (payload: number) => ({ type: ADD_CASH, payload })
export const withdrawCashAction = (payload: number) => ({ type: WITHDRAW_CASH, payload })
