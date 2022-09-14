import { connection } from "./connection"


export const getProducts = async (order: string | undefined, sort: any, search: any) => {
    try {
        const result = await connection('labecommerce_products')
            .select('*')
            .where("name", "like", `%${search}%`)
            .orderBy(sort, order)
        return result
    } catch (error: any) {
        console.log(error.message)
    }


}