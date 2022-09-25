import { Request, Response } from "express";
import { RecipesData } from "../data/recipesData";
import Recipe from "../models/Recipe";
import { IdGenerator } from "../services/IdGenerator";
import { TokenInfo } from "../services/TokenInfo";


export default class recipesController {

    async createRecipe (req: Request, res: Response) {
        try {
            const {title, description} = req.body
            const token = req.headers.authorization as string

            const tokenInfo = new TokenInfo()
            const auth =  tokenInfo.getData(token)

            const recipeData = new RecipesData()
            const recipe = await recipeData.getRecipeByTitle(title)

            if(recipe){
                throw new Error('Esta receita já existe.')
            }
            const idgenerator = new IdGenerator()
            const id = idgenerator.generateId()

            const date = Date.now().toString()

            const recipes = new Recipe(id, title, description, date, auth.id)
            await recipeData.insertRecipe(recipes)
            res.status(200).send('Receita criada com sucesso!')
        }
        catch(error) {
            res.status(500).send({message: error.message})
        }

    }

    async getRecipe(req: Request, res: Response) {

        try {
            const id = req.params.id
            const token = req.headers.authorization
            if(!token) {
                throw new Error('O token deve ser fornecido!')
            } 
            const recipesData = new RecipesData()
            const recipe = await recipesData.getRecipeById(id as string)

            const result = {
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                createAt: recipe.createdAt,
                userId: recipe.user_id
            }
            res.status(200).send(result)
        }
        catch(error) {
            res.status(500).send(error.message)
        }
    }

    async deleteRecipe(req: Request, res: Response) {

        try {
            const token = req.headers.authorization as string
            const id = req.params.id 
            const tokenInfo = new TokenInfo()
            const consult = tokenInfo.getData(token)
        
            const recipeData = new RecipesData()
            if(consult.role === 'ADMIN') {
                await recipeData.deleteRecipe(id)
                res.status(200).send('Receita deletada com sucesso!')
            }
            if(consult.role === 'NORMAL') {
                const result = await recipeData.getRecipeById(id as string)
                console.log(consult.id, result.user_id)
                if(consult.id === result.user_id) {
                    await recipeData.deleteRecipe(id)
                    res.status(200).send('Receita deletada com sucesso!')
                }
                else{
                    throw new Error('Apenas admins podem deletar esta receita.')
                }
            }
    }   catch(error) {
            res.status(500).send(error.message || error.sqlMessage)
    }
    }
}