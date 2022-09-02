import { Request, Response } from 'express'
import { insertDbProducts } from '../data/insertDbProduct'

export const createProducts = async (req:Request, res: Response) => {

    try {
        const {name, price, image_url } = req.body
        const result = await insertDbProducts(name, price, image_url)

        res.status(200).send("Produto criado com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}