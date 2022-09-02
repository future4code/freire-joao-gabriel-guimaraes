import { Request, Response } from 'express'
import { insertDb } from '../data/insertDb'
export const createUser = async (req:Request, res: Response) => {

    try {
        const {name, email, password} = req.body
        const result = await insertDb(name, email, password)

        res.status(200).send("Usuário criado com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}