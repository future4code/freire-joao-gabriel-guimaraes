import { connection } from "./connection"


export const getUserPurchases =  async (userId: any) => {
    try {
       const result = await connection('labecommerce_purchases')
        .select('id_product', 'labecommerce_products.name', 'price', 'quantity', 'total_price', 'image_url')
        .join('labecommerce_users', 'user_id', '=', `labecommerce_users.id_user`)
        .join('labecommerce_products', 'product_id', '=', 'labecommerce_products.id_product' )
        .where('id_user', '=', `${userId}`)
       return result
    } catch (error: any) {
        console.log(error.message)
    }


}