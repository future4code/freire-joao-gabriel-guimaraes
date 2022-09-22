import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IUserInputLoginDTO, IUserInputSignUpDTO, IUserProfileDTO } from "../models/User";

export class UserController {
    constructor(
        private userBusiness: UserBusiness 
    ) {}
    
    public create = async (req: Request, res: Response) =>  {

        try {
            const { name, email, password } = req.body


            const user: IUserInputSignUpDTO = {
                name,
                email,
                password
            }
            const token = await this.userBusiness.create(user)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    public login = async (req: Request, res: Response) =>  {
        try {
            const { email, password } = req.body


            const user: IUserInputLoginDTO = {
                email,
                password
            }
            const token = await this.userBusiness.login(user)
            res.status(200).send({ token })

        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }

    public getProfiles = async (req: Request, res: Response) =>  {
        try {
            const input: IUserProfileDTO =
            {
                token: req.headers.authorization,
                search: req.query.search as string,
                sort: req.query.sort as string,
                order: req.query.order as string,
                limit: req.query.limit as string,
                page: req.query.page as string
            }

            const result = await this.userBusiness.getProfiles(input)

            res.status(200).send({ users: result })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    public deleteUser = async (req: Request, res: Response) =>  {
        try {
            const token: string = req.headers.authorization
            const id: string = req.params.id

            await this.userBusiness.deleteUser(token, id)

            res.status(200).send({ message: "Usuário deletado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}