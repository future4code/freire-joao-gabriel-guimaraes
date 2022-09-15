import { app } from "./app";
import UserController from "./endpoints/userController";

 const userController = new UserController()
app.post('/signup', userController.createUser)



