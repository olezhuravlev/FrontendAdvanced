import { type CashAction, CashActions, type CashState } from 'types/declarations'

const defaultState: CashState = {
    cash: 0
}

export const cashReducer = (state: CashState = defaultState, action: CashAction): CashState => {
    switch (action.type) {
        case CashActions.ADD_CASH:
            console.log('REDUCER state:', state.cash, 'ADD_CASH payload:', action.payload)
            return { ...state, cash: state.cash + action.payload }
        case CashActions.WITHDRAW_CASH:
            console.log('REDUCER state:', state.cash, 'WITHDRAW_CASH payload:', action.payload)
            return { ...state, cash: state.cash - action.payload }
        default:
            return state
    }
}

export const addCashAction = (payload: number) => ({ type: CashActions.ADD_CASH, payload })
export const withdrawCashAction = (payload: number) => ({ type: CashActions.WITHDRAW_CASH, payload })
