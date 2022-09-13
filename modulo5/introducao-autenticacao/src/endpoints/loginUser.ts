import { Request, Response } from "express";
import { getUser } from "../data/getUserbyEmail";
import { generateToken } from "../services/GenerateToken";

export const loginUser = async (req: Request, res: Response) => {

    try {const {email, password} = req.body

    const user = await getUser(email)
    if(!user) {
        throw new Error("Usuário não encontrado.")
    }
    if(password !== user.password) {
        throw new Error('senha inválida.')
    }
    if(!email || email.indexOf('@') === -1) {
        throw new Error('email inválido.')
    }
    const token = await generateToken({id: user.id})
    res.status(200).send({token})
}
catch(error:any) {
    res.status(400).send({message: error.message})
}
}