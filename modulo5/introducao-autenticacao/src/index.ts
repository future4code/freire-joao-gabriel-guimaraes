import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { loginUser } from "./endpoints/loginUser"
import { getUserInfo } from "./endpoints/getUserInfo"

app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)
app.post('/user/login', loginUser)
app.get('/user/profile', getUserInfo)