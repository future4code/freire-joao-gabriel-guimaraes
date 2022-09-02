import { Request, Response } from "express";
import { getProducts } from "../data/getProducts";



export const getAllProducts = async (req: Request, res:Response) => {

    try {
        const result = await getProducts()
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}