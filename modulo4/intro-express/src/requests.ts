import  express  from "express";
import cors from 'cors'
import { users } from "./arrays";
import { posts } from "./arrays";
//https://documenter.getpostman.com/view/21556367/VUjTj34G - link da API


const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log('servidor conectado na porta 3003 [localhost:3003]')
})
//intro

app.get('/', (req, res) => {
    res.send('Welcome to intro-express!')
})

//getAllUsers

app.get('/users', (req, res) => {
    const listaFiltrada = users.map((user) => {
       return user
    }).flat(1)
    res.send(listaFiltrada)
})
// getAllPosts

app.get('/posts', (req, res) => {
    const listaDePost = posts.map((post) => {
        return post
    }).flat(1)
    res.send(listaDePost)
})
// getUserPosts

app.get('/posts/:userId', (req, res) => {
    const id = req.params.userId
    const listaAtualizada = posts.filter((post) => {
        return post.userId === Number(id)
    })
    res.send(listaAtualizada)
})
// deletePostById

app.delete('/posts/:postId', (req, res) => {
    const id = req.params.postId
    const listaAtualizada = posts.filter((post) => {
        return post.id !== Number(id)
    })
    res.status(200).send(listaAtualizada)
})
// deleteUserById
app.delete('/users/:userId', (req, res) => {
    const id = req.params.userId
    const listaAtualizada = users.filter((user) => {
        return user.id !== Number(id)
    })
    res.status(200).send(listaAtualizada)
})
