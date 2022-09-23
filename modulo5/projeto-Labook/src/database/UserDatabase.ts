import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"

    public createUser = async (user: User) => {

        await BaseDatabase.connection("Labook_Users")
        .insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        })
    }

    public getUserByEmail = async (email: string) => {

        const result = await BaseDatabase.connection("Labook_Users")
        .select()
        .where({email})

        return result[0]
    }
}