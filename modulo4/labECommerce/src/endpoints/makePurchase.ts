import { Request, Response } from 'express'
import { insertDbPurchase } from '../data/insertDbPurchase'
export const makePurchase = async (req:Request, res: Response) => {

    try {
        const {user_id, product_id, quantity} = req.body
        const result = await insertDbPurchase(user_id, product_id, quantity)

        res.status(200).send("compra registrada com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}