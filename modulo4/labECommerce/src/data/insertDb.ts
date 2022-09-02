import { connection } from "./connection"


export const insertDb =  async (name: string, email: string, password:string) => {
    
    const id_user = Date.now().toString()
    const result = await connection('labecommerce_users')
    .insert({
        id_user,
        name,
        email,
        password
    })


}