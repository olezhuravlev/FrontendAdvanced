import { getRemoteData, getRemoteUsersIds, type IUser } from './request'

const axios = require('axios')

jest.mock('axios')

describe('Request test', () => {
    let response: {
        data: IUser[]
    }
    beforeEach(() => {
        response = {
            data: [
                {
                    id: 1,
                    name: 'Test name 1',
                    username: 'Test username 1'
                },
                {
                    id: 2,
                    name: 'Test name 2',
                    username: 'Test username 2'
                }
            ]
        }
    })

    test('Retrieve values from remote server', async () => {
        const url = 'https://jsonplaceholder.typicode.com/users'

        axios.get = jest.fn()
        axios.get.mockReturnValue(response)

        const data = await getRemoteUsersIds(url)

        expect(axios.get).toHaveBeenCalledWith(url)
        expect(axios.get).toBeCalledTimes(1)
        expect(data).toEqual(['1', '2'])
        expect(data).toMatchSnapshot()
    })

    test('Retrieve and show values from remote server', async () => {
        const url = 'https://jsonplaceholder.typicode.com/users'

        getRemoteData(url).then((payload: IUser[]) => {
            console.log(payload)
        })

        expect(true)
    })
})
