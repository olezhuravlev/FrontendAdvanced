import { addCustomersAction } from 'store/customerReducer'

export const fetchCustomers = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(async response => await response.json())
            .then(json => {
                dispatch(addCustomersAction(json))
            })
    }
}
