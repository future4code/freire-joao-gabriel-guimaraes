import { getUserPurchases } from './getUserPurchases'
import { connection } from "./connection"


export const getUsers = async () => {
    try {
        const result = await connection('labecommerce_users')
            .select('*')

        let usersInformation: any = []

        for (let user of result) {
            let purchases = await getUserPurchases(user.id_user)
            usersInformation.push({ ...user, purchases: purchases })
        }
        return usersInformation

    } catch (error: any) {
        console.log(error.message)
    }


}