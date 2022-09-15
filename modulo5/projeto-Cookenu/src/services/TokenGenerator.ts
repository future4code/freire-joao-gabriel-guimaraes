import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types/types'

export class TokenGenerator {

    public async generateToken(input:authenticationData): Promise<string> {
        const token = jwt.sign({
            input
        },
            
        process.env.JWT_KEY as string,
        {
            expiresIn: '35min'
        })
        return token
    }
}