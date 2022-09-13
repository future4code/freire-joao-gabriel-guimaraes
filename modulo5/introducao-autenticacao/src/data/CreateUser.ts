import connection from "../connection"
import {user} from '../types/types'

export const createUser1 = async (newUser: user) => {
    const {id, email, password} = newUser
    const userTableName = 'User'
    await connection
    .insert({
        id,
        email,
        password
    })
    .into(userTableName)
}