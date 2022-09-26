import { UserDatabase } from "../database/UserDatabase"
import { ParamsError } from "../errors/ParamsError"
import { IUserInputLogin, IUserInputSignUp, User, USER_ROLES } from "../models/User"
import { Authenticator, ITokenPayload } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) { }


    public signUp = async (input: IUserInputSignUp) => {

        const { name, email, password } = input

        if (!name || !email || !password) {
            throw new Error("Todos parâmetros devem ser passados")
        }
        if(name.length < 3 || typeof name !== 'string') {
            throw new Error("Parâmetro 'name' inválido")
        }
        if(password.length < 6 || typeof password !== 'string') {
            throw new Error("Parâmetro 'password' inválido")
        }
        if (typeof email !== "string" || email.length < 3) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }
        const response = await this.userDatabase.getUserByEmail(email)
        
        if(response) {
            throw new Error(new ParamsError().message)
        }
        const id = this.idGenerator.generate()

        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id, 
            name, 
            email, 
            hashedPassword, 
            USER_ROLES.NORMAL)

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }
        const token = this.authenticator.generateToken(payload)

        return token
    }
    public login = async (input: IUserInputLogin) => {

        const { email, password } = input

        if(password.length < 6 || typeof password !== 'string') {
            throw new Error("Parâmetro 'password' inválido")
        }
        if (typeof email !== "string" || email.length < 3) {
            throw new Error("Parâmetro 'email' inválido")
        }

        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            throw new Error("Parâmetro 'email' inválido")
        }
        const user = await this.userDatabase.getUserByEmail(email)
        
        if(!user) {
            throw new Error('Usuário inexistente.')
        }
        
        const correctPassword = await this.hashManager.compare(password, user.password)

        if(!correctPassword) {
            throw new Error('Senha incorreta.')
        }
    

        const payload: ITokenPayload = {
            id: user.id,
            role: user.role
        }
        const token = this.authenticator.generateToken(payload)

        return token
    }
}