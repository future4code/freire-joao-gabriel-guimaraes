import { User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Arq_Users"

    async insertUser(user: User) {

        await BaseDatabase.connection('Arq_Users')
        .insert({
            id: user.getId(),
            name:user.getName(),
            email:user.getEmail(),
            password:user.getPassword(),
            role: user.getRole()
        })
    }

    async getUserByEmail(email: string) {
        const result = await BaseDatabase.connection('Arq_Users')
        .select("*")
        .where({email})

        return result[0]
    }
}