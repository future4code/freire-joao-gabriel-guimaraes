import { Request, Response } from "express";
import { getUserById } from "../data/getUserById";
import { getData } from "../services/getTokenInfo";


export const getUserInfo = async (req: Request, res: Response) => {

    try {
        const token = req.headers.authorization as string

        const auth = getData(token)
        console.log(auth)
        if(auth.role as string !== "ADMIN") {
            throw new Error('usuário não permitido! Apenas admins podem acessar esta área.')
        }
        const result = await getUserById(auth.id as string)
        
    res.status(200).send({result})
    }
    catch(error: any) {
        res.status(400).send({message: error.message})
    }
}