import { app } from "./app";
import recipesController  from "./endpoints/recipesController";
import UserController from "./endpoints/userController";

 const userController = new UserController()
app.post('/signup', userController.createUser)
app.post('/login', userController.userLogin)
app.get('/user/profile', userController.getProfile)

const recipeController = new recipesController()
app.post('/recipe', recipeController.createRecipe)
app.get('/recipe/:id', recipeController.getRecipe)
app.delete('/recipes/:id', recipeController.deleteRecipe)



