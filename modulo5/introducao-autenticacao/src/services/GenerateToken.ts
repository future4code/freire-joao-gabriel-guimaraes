import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types/types'

export async function generateToken (id: authenticationData): Promise<string> {

    const token = jwt.sign(
        {id},
        process.env.JWT_KEY as string,
        {
            expiresIn: '5min'
        }
    )
    return token
}

    