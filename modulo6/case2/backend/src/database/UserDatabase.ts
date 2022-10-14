import { IPokemonSearchDTO } from "../models/Pokemon";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    public getAllPokemons = async (input: any): Promise<IPokemonSearchDTO[]> => {
        const { sort, order, limit, offset } = input
        const response = await BaseDatabase.connection("Pokemon_Go")
            .select("Pokedex_Number", "name")
            .orderBy(sort, order)
            .limit(limit)
            .offset(offset)
        return response
    }
    public getPokemonByname = async (name: string): Promise<string[]> => {

        const response = await BaseDatabase.connection("Pokemon_Go")
            .select("name")
            .where({ name })

        return response
    }
    public getPokemonById = async (id: string): Promise<string[]> => {

        const response = await BaseDatabase.connection("Pokemon_Go")
            .select()
            .where({ Pokedex_Number: id })

        return response
    }
}