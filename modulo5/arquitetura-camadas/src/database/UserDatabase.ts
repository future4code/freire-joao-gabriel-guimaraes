import { IUserResultDTO, IUsersProfileOutputDTO, User, UserDBDTO } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    async insertUser(user: User) {

        await BaseDatabase.connection('Arq_Users')
            .insert({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            })
    }

    async getUserByEmail(email: string) {
        const result: IUserResultDTO[] = await BaseDatabase.connection('Arq_Users')
            .select(

        )
            .where({ email })

        return result[0]
    }
    async getUserById(id: string) {
        const result: IUserResultDTO[] = await BaseDatabase.connection('Arq_Users')
            .select()
            .where({ id })

        return result[0]
    }
    async getUsers(input: UserDBDTO) {
        const { search, order, sort, limit, offset } = input
        const result: IUsersProfileOutputDTO[] = await BaseDatabase.connection('Arq_Users')
            .select("id", "name", "email")
            .where('name', 'like', `%${search}%`)
            .orderBy(order, sort)
            .limit(limit)
            .offset(offset)
        return result
    }
    async deleteUser(id: string) {
        await BaseDatabase.connection
            .delete()
            .from('Arq_Users')
            .where({ id })

    }
}