import { connection } from "./connection"


export const getUsers =  async () => {
    try {
       const result = await connection('labecommerce_users')
        .select('*')
        return result
    } catch (error: any) {
        console.log(error.message)
    }


}