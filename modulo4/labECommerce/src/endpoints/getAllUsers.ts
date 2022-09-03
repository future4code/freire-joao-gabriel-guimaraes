import { Request, Response } from "express";
import { getUsers } from "../data/getUsers";


export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const result = await getUsers()
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}