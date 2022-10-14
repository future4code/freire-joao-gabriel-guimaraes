import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    constructor(
        private userBusiness: UserBusiness) { }
    public searchPokemon = async (req: Request, res: Response): Promise<void> => {
        try {
            const input = {
                sort: req.query.sort,
                order: req.query.order,
                limit: req.query.limit,
                offset: req.query.offset
            }
            const response = await this.userBusiness.getAllPokemons(input)
            res.status(200).send({ response })
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
    public getPokemonById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id: string = req.params.id
            const response = await this.userBusiness.getPokemonById(id)
            res.status(200).send({ response })
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}