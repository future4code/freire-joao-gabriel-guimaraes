import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { IUserInputLoginDTO, IUserInputSignUpDTO, IUserProfileDTO } from "../models/User";

export class UserController {

    async create(req: Request, res: Response) {

        try {
            const { name, email, password } = req.body

            const userBusiness = new UserBusiness()
            const user: IUserInputSignUpDTO = {
                name,
                email,
                password
            }
            const token = await userBusiness.create(user)

            res.status(200).send({ token })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const userBusiness = new UserBusiness()
            const user: IUserInputLoginDTO = {
                email,
                password
            }
            const token = await userBusiness.login(user)
            res.status(200).send({ token })

        } catch (error) {
            res.status(500).send({ message: error.message })
        }

    }

    async getProfiles(req: Request, res: Response) {
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

            const userBusiness = new UserBusiness()

            const result = await userBusiness.getProfiles(input)

            res.status(200).send({ users: result })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const token: string = req.headers.authorization
            const id: string = req.params.id
            const userBusiness = new UserBusiness()

            await userBusiness.deleteUser(token, id)

            res.status(200).send({ message: "Usuário deletado com sucesso!" })
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }
}