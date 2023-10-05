import * as React from 'react'
import { useState } from 'react'
import { myClassNames } from 'shared/lib/classNames/classNames'
import cls from './Cash.module.scss'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, type Customer, removeCustomerAction } from 'store/customerReducer'
import { addCashAction, withdrawCashAction } from 'store/cashReducer'
import { fetchCustomers } from 'asyncActions/customers'

interface CashProps {
    className?: string
}

export const Cash = ({ className }: CashProps) => {
    const { t } = useTranslation('cash')

    const cash = useSelector<any, number>(state => state.cash.cash)
    const customers = useSelector<any, Customer[]>(state => state.customers.customers)

    const [value, setValue] = useState(cash)

    const dispatch = useDispatch()
    const addCash = () => {
        console.log('ADD', value)
        dispatch(addCashAction(value))
    }
    const withdrawCash = () => {
        console.log('WITHDRAW', value)
        dispatch(withdrawCashAction(value))
    }

    const addCustomer = () => {
        const name = prompt()
        const customer = {
            id: Date.now(),
            name
        }
        console.log('ADD CUSTOMER', name)
        dispatch(addCustomerAction([customer]))
    }

    const addCustomers = () => {
        fetchCustomers()(dispatch)
        console.log('FETCH CUSTOMERS', customers)
    }

    const removeCustomer = (customerId: Customer) => {
        console.log('REMOVE CUSTOMER', customerId)
        dispatch(removeCustomerAction([customerId]))
    }

    const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('VALUE:', e.target.value)
        setValue(Number(e.target.value))
    }

    return (
        <div className={myClassNames(cls.Cash, {}, [className])}>
            <input className={cls.CashInput} onChange={inputOnChange}/>
            <button className={cls.CashButtonAdd} onClick={addCash}>{t('add-cash')}</button>
            <button className={cls.CashButtonWithdraw} onClick={withdrawCash}>{t('withdraw-cash')}</button>
            <input className={cls.CashResult} value={cash} readOnly/>
            <button className={cls.CustomerButtonAdd} onClick={addCustomers}>{t('fetch-customers')}</button>
            <button className={cls.CustomerButtonAdd} onClick={addCustomer}>{t('add-customer')}</button>
            {customers.length === 0
                ? <div className={cls.Customer}>{t('no-clients')}</div>
                : <div> {customers.map(customer =>
                    <div className={cls.Customer} key={customer.id}>
                        <div>{customer.name}</div>
                        <button className={cls.CustomerButtonRemove} onClick={() => {
                            removeCustomer(customer)
                        }}>{t('remove-customer')}</button>
                    </div>
                )}
                </div>}
        </div>
    )
}
