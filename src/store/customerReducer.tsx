import { type CustomerAction, CustomerActions, type CustomerState } from 'types/declarations'

export interface Customer {
    id: number
    name: string
}

const defaultState: CustomerState = {
    customers: [] as Customer []
}

export const customerReducer = (state: CustomerState = defaultState, action: CustomerAction): CustomerState => {
    switch (action.type) {
        case CustomerActions.ADD_CUSTOMERS:
            console.log('ADD_CUSTOMERS', action.payload)
            return { ...state, customers: [...state.customers, ...action.payload] }
        case CustomerActions.ADD_CUSTOMER:
            console.log('ADD_CUSTOMER', action.payload)
            return { ...state, customers: [...state.customers, action.payload[0]] }
        case CustomerActions.REMOVE_CUSTOMER:
            console.log('REMOVE_CUSTOMER', action.payload)
            return { ...state, customers: [...state.customers.filter(customer => customer.id !== action.payload[0].id)] }
        default:
            return state
    }
}

export const addCustomerAction = (payload: Customer[]) => ({ type: CustomerActions.ADD_CUSTOMER, payload })
export const addCustomersAction = (payload: Customer[]) => ({ type: CustomerActions.ADD_CUSTOMERS, payload })
export const removeCustomerAction = (payload: Customer[]) => ({ type: CustomerActions.REMOVE_CUSTOMER, payload })
