import { type Customer } from 'store/customerReducer'
import { type Action } from 'redux'

// ===========================================
// Cash

export interface CashState {
    cash: number
}

export enum CashActions {
    ADD_CASH = 'ADD_CASH',
    WITHDRAW_CASH = 'WITHDRAW_CASH'
}

interface BaseCashAction extends Action {
    payload: number
}

interface AddCashAction extends BaseCashAction {
    type: CashActions.ADD_CASH
}

interface WithdrawCashAction extends BaseCashAction {
    type: CashActions.WITHDRAW_CASH
}

export type CashAction = AddCashAction | WithdrawCashAction

// ===========================================
// Customer

export interface CustomerState {
    customers: Customer []
}

export enum CustomerActions {
    ADD_CUSTOMER = 'ADD_CUSTOMER',
    ADD_CUSTOMERS = 'ADD_CUSTOMERS',
    REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
}

interface BaseCustomerAction extends Action {
    payload: Customer[]
}

interface AddCustomerAction extends BaseCustomerAction {
    type: CustomerActions.ADD_CUSTOMER
}

interface AddCustomersAction extends BaseCustomerAction {
    type: CustomerActions.ADD_CUSTOMERS
}

interface RemoveCustomerAction extends BaseCustomerAction {
    type: CustomerActions.REMOVE_CUSTOMER
}

export type CustomerAction = AddCustomerAction | AddCustomersAction | RemoveCustomerAction
