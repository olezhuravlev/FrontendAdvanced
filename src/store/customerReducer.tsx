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
    payload: Customer[]
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const ADD_CUSTOMERS = 'ADD_CUSTOMERS'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'

export const customerReducer = (state = defaultState, action: CustomerAction) => {
    switch (action.type) {
        case ADD_CUSTOMERS:
            console.log('ADD_CUSTOMERS', action.payload)
            return { ...state, customers: [...state.customers, ...action.payload] }
        case ADD_CUSTOMER:
            console.log('ADD_CUSTOMER', action.payload)
            return { ...state, customers: [...state.customers, action.payload[0]] }
        case REMOVE_CUSTOMER:
            console.log('REMOVE_CUSTOMER', action.payload)
            return { ...state, customers: [...state.customers.filter(customer => customer.id !== action.payload[0].id)] }
        default:
            return state
    }
}

export const addCustomerAction = (payload: Customer[]) => ({ type: ADD_CUSTOMER, payload })
export const addCustomersAction = (payload: Customer[]) => ({ type: ADD_CUSTOMERS, payload })
export const removeCustomerAction = (payload: Customer[]) => ({ type: REMOVE_CUSTOMER, payload })
