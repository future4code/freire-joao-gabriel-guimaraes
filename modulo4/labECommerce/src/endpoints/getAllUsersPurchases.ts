import { Request, Response } from "express";
import { getUserPurchases } from "../data/getUserPurchases";
import { getUsers } from "../data/getUsers";


export const getAllUsersPurchases = async (req: Request, res:Response) => {

    try {
        const userId = req.params.user_id
        const result = await getUserPurchases(userId)
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}