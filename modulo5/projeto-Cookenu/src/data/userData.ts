import User from "../models/User";
import { BaseDataBase } from "./BaseDataBase";


export class UserData extends BaseDataBase {

    async insertUser(user: User): Promise <void> {

        await BaseDataBase.connection()
        .insert({
            id: user.getId(),
            name:user.getName(),
            email:user.getEmail(),
            password:user.getPassword(),
        })
        .into('Cookenu_users')
    }
}