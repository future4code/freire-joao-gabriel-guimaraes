import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IUserInputLogin, IUserInputSignUp } from "../models/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) {}

    public singUp = async (req: Request, res: Response) => {
       try { 
        const input: IUserInputSignUp = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const token = await this.userBusiness.signUp(input)
        res.status(500).send({message: "Usuário cadastrado com sucesso", token})
    }
        catch(error) {
            res.status(error.statusCode).send({message: error.message})
        }
    }
    public login = async (req: Request, res: Response) => {
       try { 
        const input: IUserInputLogin = {
            email: req.body.email,
            password: req.body.password
        }

        const token = await this.userBusiness.login(input)
        res.status(500).send({message: "logado com sucesso.", token})
    }
        catch(error) {
            res.status(500).send({message: error.message})
        }
    }
}