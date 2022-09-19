import { Request, Response } from "express";
import { UserData } from "../data/userData";
import User from "../models/User";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";
import { TokenInfo } from "../services/TokenInfo";


export default class UserController {

    async createUser(req: Request, res: Response): Promise<void>{
        try {
            
            const {name, email, password, role} = req.body
            if(!name || !email || !password || !role) {
                throw new Error("Os parâmetros devem ser passados: 'nome', 'email', 'senha', 'role'")
            }
            const idgenerator = new IdGenerator()
            const id = idgenerator.generateId()

            const hashManager = new HashManager()
            const pass = await hashManager.hash(password)

            const user = new User(id, name, email, pass, role)
            const userdata = new UserData()
            await userdata.insertUser(user)
            const tokenGen = new TokenGenerator()
            const token = await tokenGen.generateToken({id, role}) 
            res.status(200).send({token})
        }
        catch(error) {
            res.status(422).send(error.message)
        }
    }

    
    async userLogin(req: Request, res: Response): Promise<void> {
        try {
            const {email, password} = req.body

            const userData = new UserData()
            const user = await userData.getUserByEmail(email)
            if(!user) {
                throw new Error('Email não cadastrado no banco de dados!')
            }

            const hashManager = new HashManager()
            const consultPass = await hashManager.compare(password, user.password)

            if(!consultPass) {
                throw new Error('Senha inválida.')
            }
            if(!email || email.indexOf('@') === -1) {
                throw new Error('Digite um email válido')
            }
    
            const tokenGenerator = new TokenGenerator()
            const token = await tokenGenerator.generateToken({id: user.id, role: user.role})

            res.status(200).send({token})

        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }

    async getProfile(req: Request, res: Response): Promise<void> {

       try {
        const token = req.headers.authorization as string
        
        const tokenInfo = new TokenInfo()
        const auth =  tokenInfo.getData(token)
        console.log(auth)
        const userData = new UserData()
        const user = await userData.getUserById(auth.id as string)
        
        if(!user) {
            throw new Error('Email não cadastrado no banco de dados!')
        }
        const result = {
            id: user.id,
            name: user.name,
            email: user.email
        }
        res.status(200).send({result})
        }
        catch(error) {
            res.status(400).send(error.message || error.sqlMessage)
        }

    }
}