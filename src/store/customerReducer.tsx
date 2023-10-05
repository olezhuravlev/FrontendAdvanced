import { type Action } from 'redux'

export interface Customer {
    id: number
    name: string
}

interface State {
    customers: Customer []
}

const defaultState: State = {
    customers: [] as Customer []
}

export interface CustomerAction extends Action {
    payload: Customer
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'

export const customerReducer = (state = defaultState, action: CustomerAction) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            console.log('ADD_CUSTOMER', action.payload)
            return { ...state, customers: [...state.customers, action.payload] }
        case REMOVE_CUSTOMER:
            console.log('REMOVE_CUSTOMER', action.payload)
            return { ...state, customers: [...state.customers.filter(customer => customer.id !== action.payload.id)] }
        default:
            return state
    }
}

export const addCustomerAction = (payload: Customer) => ({ type: ADD_CUSTOMER, payload })
export const removeCustomerAction = (payload: Customer) => ({ type: REMOVE_CUSTOMER, payload })
