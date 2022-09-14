import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/types";


export const getData =  (token: string): authenticationData => {

        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any

        const result = {
            id: payload.id.id,
            role: payload.id.role
        }
        return result
}