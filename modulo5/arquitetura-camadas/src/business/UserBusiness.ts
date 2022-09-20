import { UserDatabase } from "../database/UserDatabase"
import { IUserDB, User, USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {

    async create(user: any) {
        const {name,email,password} = user

        let role
        if(!role) {
            role = USER_ROLES.NORMAL
        }

        if(!name || !email || !password) {
            throw new Error("Os parâmetros 'nome', 'email' e 'senha' devem ser fornecidos")
        }
        if(name.length < 3) {
            throw new Error('nome deve possuir no mínimo 3 caracteres')
        }
        if(password.length < 6) {
            throw new Error('senha deve possuir no mínimo 6 caracteres')
        }
        let userVerify = await new UserDatabase().getUserByEmail(email)
        if(userVerify) {
            throw new Error('Este email ja existe no nosso banco de dados.')
        }
        const passwordHash = (await new HashManager().hash(password))
        const id = new IdGenerator().generate()

        const usuario = new User(id, name, email, passwordHash, role)
        await new UserDatabase().insertUser(usuario)
        const token = new Authenticator().generateToken({id, role})
        return token
    }

    async login(email:string, password:string) {

        let userVerify: IUserDB = await new UserDatabase().getUserByEmail(email)
        if(!userVerify) {
            throw new Error('usuário inexistente')
        }
        if(password.length < 6) {
            throw new Error('senha deve possuir no mínimo 6 caracteres')
        }
        const comparePassword: boolean = await new HashManager().compare(password, userVerify.password)
        if(!comparePassword) {
            throw new Error('senha incorreta')
        }
        const {id, role} = userVerify
        const token = new Authenticator().generateToken({id, role})
        return token
    }
}