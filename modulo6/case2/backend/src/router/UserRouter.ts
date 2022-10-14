import { Router } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UserController } from '../controller/UserController'
import { UserDatabase } from '../database/UserDatabase'


export const userRouter = Router()

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
    )
)

userRouter.get("/", userController.searchPokemon)
userRouter.get("/:id", userController.getPokemonById)


