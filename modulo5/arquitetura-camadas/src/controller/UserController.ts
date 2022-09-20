import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

    async create(req: Request, res: Response) {

        try {
            const {name, email, password} = req.body

            const userBusiness = new UserBusiness()
            const user = {
                name,
                email,
                password
            }
            const token = await userBusiness.create(user)

            res.status(200).send({token})
        } catch(error){
            res.status(500).send({message: error.message})
        }
    }

    async login(req: Request, res: Response) {
       try { 
            const {email, password} = req.body

            const userBusiness = new UserBusiness()

            const token = await userBusiness.login(email,password)
            res.status(200).send({token})
            
    } catch(error) {
        res.status(500).send({message: error.message})
    }

    }
}