import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types/types'

export async function generateToken (input: authenticationData): Promise<string> {
    console.log(input)
    const token = jwt.sign(
        {id: input.id, 
        role: input.role},
        process.env.JWT_KEY as string,
        {
            expiresIn: '5min'
        }
    )
    return token
}

    