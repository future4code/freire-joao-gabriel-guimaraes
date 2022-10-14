import { UserDatabase } from "../database/UserDatabase";
import { IPokemonSearchDTO } from "../models/Pokemon";


export class UserBusiness {
    constructor(private userDatabase: UserDatabase) { }
    public getAllPokemons = async (input: any): Promise<IPokemonSearchDTO[]> => {

        if (!input.sort) {
            input.sort = 'Pokedex_Number'
        }
        if (!input.order) {
            input.order = "ASC"
        }
        if (!input.limit) {
            input.limit = 20
        }

        if (input.order !== "ASC" && input.order !== "DESC") {
            throw new Error("Parâmetro 'order' inválido.")
        }
        const pokemonList: IPokemonSearchDTO[] = await this.userDatabase.getAllPokemons(input)
        if (!pokemonList) {
            throw new Error('Erro inesperado')
        }
        return pokemonList
    }
    public getPokemonById = async (id: string): Promise<string[]> => {

        const searchedPokemon: string[] = await this.userDatabase.getPokemonById(id)
        if (!searchedPokemon) {
            throw new Error('Pokémon inexistente.')
        }
        if (!id) {
            throw new Error('Parâmetro nome deve ser passado!')
        }
        return searchedPokemon
    }
}