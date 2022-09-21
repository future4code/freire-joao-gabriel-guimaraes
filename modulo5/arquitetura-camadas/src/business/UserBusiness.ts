import { UserDatabase } from "../database/UserDatabase"
import { IUserDB, IUserInputLoginDTO, IUserInputSignUpDTO, IUserProfileDTO, IUsersProfileOutputDTO, User, USER_ROLES } from "../models/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {

    async create(user: IUserInputSignUpDTO) {
        const { name, email, password } = user

        let role
        if (!role) {
            role = USER_ROLES.NORMAL
        }

        if (!name || !email || !password) {
            throw new Error("Os parâmetros 'nome', 'email' e 'senha' devem ser fornecidos")
        }
        if (name.length < 3) {
            throw new Error('nome deve possuir no mínimo 3 caracteres')
        }
        if (password.length < 6) {
            throw new Error('senha deve possuir no mínimo 6 caracteres')
        }
        let userVerify = await new UserDatabase().getUserByEmail(email)
        if (userVerify) {
            throw new Error('Este email ja existe no nosso banco de dados.')
        }
        const passwordHash = (await new HashManager().hash(password))
        const id = new IdGenerator().generate()

        const usuario = new User(id, name, email, passwordHash, role)
        await new UserDatabase().insertUser(usuario)
        const token = new Authenticator().generateToken({ id, role })
        return token
    }

    async login(user: IUserInputLoginDTO) {
        const { email, password } = user
        let userVerify: IUserDB = await new UserDatabase().getUserByEmail(email)
        if (!userVerify) {
            throw new Error('usuário inexistente')
        }
        if (password.length < 6) {
            throw new Error('senha deve possuir no mínimo 6 caracteres')
        }
        const comparePassword: boolean = await new HashManager().compare(password, userVerify.password)
        if (!comparePassword) {
            throw new Error('senha incorreta')
        }
        const { id, role } = userVerify
        const token = new Authenticator().generateToken({ id, role })
        return token
    }

    async getProfiles(input: IUserProfileDTO) {

        const search = input.search || ""
        const order = input.order || "name"
        const sort = input.sort || "ASC"
        const limit = Number(input.limit) || 10
        const page = Number(input.page) || 1
        const offset = limit * (page - 1)
        if (!input.token) {
            throw new Error('o token deve ser passado!')
        }

        const user = new Authenticator().getTokenPayload(input.token)
        if (!user) {
            throw new Error('usuário inexistente')
        }
        const userVerify = await new UserDatabase().getUserById(user.id)
        if (!userVerify) {
            throw new Error('token inválido ou faltando.')
        }
        const usersDB = {
            search,
            order,
            sort,
            limit,
            page,
            offset
        }
        const result: IUsersProfileOutputDTO[] = await new UserDatabase().getUsers(usersDB)
        return result

    }

    async deleteUser(token: string, id: string) {
        if (!token) {
            throw new Error('o token deve ser passado!')
        }

        const user = new Authenticator().getTokenPayload(token)
        if (!user) {
            throw new Error('usuário inexistente')
        }
        if (id === user.id) {
            throw new Error('usuário logados não podem deletar suas próprias contas.')
        }
        if (user.role === USER_ROLES.NORMAL) {
            throw new Error('Apenas usuários ADMIN podem deletar contas.')
        }
        await new UserDatabase().deleteUser(id)
    }
}