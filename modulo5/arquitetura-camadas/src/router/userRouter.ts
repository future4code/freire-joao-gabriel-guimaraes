import { Router} from 'express'
import { UserController } from '../controller/UserController'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { UserDatabase } from '../database/UserDatabase'
import { IdGenerator } from '../services/IdGenerator'
import { UserBusiness } from '../business/UserBusiness'
export const userRouter = Router()

const userController = new UserController(
    new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

userRouter.post('/signup', userController.create)
userRouter.post('/login', userController.login)
userRouter.get('/', userController.getProfiles)
userRouter.delete('/:id', userController.deleteUser)