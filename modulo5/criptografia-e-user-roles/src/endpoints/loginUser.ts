import { Request, Response } from "express";
import { getUser } from "../data/getUserbyEmail";
import { generateToken } from "../services/GenerateToken";
import { HashManager } from "../services/HashManager";

export const loginUser = async (req: Request, res: Response) => {

    try {const {email, password} = req.body

    const user = await getUser(email)
    if(!user) {
        throw new Error("Usuário não encontrado.")
    }

    const instanceHash = new HashManager()
    const pass = await instanceHash.compareHash(password, user.password)

    if(!pass) {
        throw new Error('senha inválida.')
    }

    if(!email || email.indexOf('@') === -1) {
        throw new Error('email inválido.')
    }
    console.log(user.role)
    const token = await generateToken({id: user.id, role: user.role})
    res.status(200).send({token})
}
catch(error:any) {
    res.status(400).send({message: error.message})
}
}