import axios from 'axios'

export interface IUser {
    'id': number
    'name': string
    'username': string
}

export const getRemoteUsersIds = async (url: string) => {
    try {
        const response = await axios.get(url)
        const userIds = response.data.map((user: IUser) => String(user.id))
        return userIds
    } catch (e) {
    }
}

export const getRemoteData = async (url: string): Promise<IUser[]> => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (e) {
    }
}
