import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types/types'

export class TokenInfo {
    public  getData(token: string): authenticationData{
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
        console.log(payload)
        return payload
    }
}