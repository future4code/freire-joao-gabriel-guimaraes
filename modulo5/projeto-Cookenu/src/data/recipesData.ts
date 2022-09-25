import Recipe from "../models/Recipe";
import { Recipes } from "../types/types";
import { BaseDataBase } from "./BaseDataBase";


export class RecipesData extends BaseDataBase {

    async insertRecipe(recipe: Recipe): Promise<void> {

        await BaseDataBase.connection
        .insert({
            id:recipe.getId(),
            title:recipe.getTitle(),
            description:recipe.getDescription(),
            createdAt:recipe.getCreatedAt(),
            user_id:recipe.getuserId()
        })
        .into('Cookenu_recipes')
    }
    async getRecipeByTitle(title: string): Promise<Recipes> {

    const result = await BaseDataBase.connection
    .select('*')
    .from('Cookenu_recipes')
    .where({title})
    return result[0]
    }
    async getRecipeById(id: string): Promise<Recipes> {

    const result = await BaseDataBase.connection
    .select('*')
    .from('Cookenu_recipes')
    .where({id})
    return result[0]
    }
    async deleteRecipe (id: string): Promise<void> {

     await BaseDataBase.connection
    .delete()
    .from('Cookenu_recipes')
    .where({id})
    
    }
}