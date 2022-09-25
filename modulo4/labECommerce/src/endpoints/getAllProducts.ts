import { Request, Response } from "express";
import { getProducts } from "../data/getProducts";



export const getAllProducts = async (req: Request, res: Response) => {

    try {
        let order = req.query.order
        let sort = req.query.sort
        let search = req.query.search
        if (order !== "asc" && order !== 'desc') {
            order = 'asc'
        }
        if (!sort) {
            sort = 'id_product'
        }
        if (!search) {
            search = ''
        }

        const result = await getProducts(order, sort, search)
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}