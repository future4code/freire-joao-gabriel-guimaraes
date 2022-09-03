import { Request, Response } from 'express'
import { insertDbProducts } from '../data/insertDbProduct'

export const createProducts = async (req: Request, res: Response) => {

    try {
        const { name, price, image_url } = req.body
        await insertDbProducts(name, price, image_url)

        res.status(200).send("Produto criado com sucesso!")
    } catch (error) {
        if (error instanceof Error) {
            // ✅ TypeScript knows err is Error
            res.status(500).send(error.message)
          } else {
            console.log('Unexpected error', error);
          }
    }
}