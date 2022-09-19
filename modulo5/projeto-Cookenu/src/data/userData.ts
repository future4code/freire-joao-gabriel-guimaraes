import User from "../models/User";
import { Users } from "../types/types";
import { BaseDataBase } from "./BaseDataBase";


export class UserData extends BaseDataBase {

    async insertUser(user: User): Promise <void> {

        await BaseDataBase.connection
        .insert({
            id: user.getId(),
            name:user.getName(),
            email:user.getEmail(),
            password:user.getPassword(),
            role: user.getRole(),
        })
        .into('Cookenu_users')
    }

    async getUserByEmail(email: string): Promise<Users> {

        const result = await BaseDataBase.connection
        .select('*')
        .from('Cookenu_users')
        .where({email})
        return result[0]
    }
    async getUserById(id: string): Promise<Users> {

        const result = await BaseDataBase.connection
        .select('*')
        .from('Cookenu_users')
        .where({id})
        return result[0]
    }

}