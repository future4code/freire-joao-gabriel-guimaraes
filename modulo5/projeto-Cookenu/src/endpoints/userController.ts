import { Request, Response } from "express";
import { UserData } from "../data/userData";
import User from "../models/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";


export default class UserController {

    async createUser(req: Request, res: Response): Promise<void>{
        try {
            
            const {name, email, password} = req.body
            if(!name || !email || !password) {
                throw new Error("Os parâmetros devem ser passados: 'nome', 'email', 'senha'")
            }
            const idgenerator = new IdGenerator()
            const id = idgenerator.generateId()

            const hashManager = new HashManager()
            const pass = await hashManager.hash(password)

            const user = new User(id, name, email, pass)
            const userdata = new UserData()
            await userdata.insertUser(user)
            const tokenGen = new TokenGenerator()
            const token = await tokenGen.generateToken({id}) 
            res.status(200).send({token})
        }
        catch(error) {
            res.status(422).send(error.message)
        }
    }
}