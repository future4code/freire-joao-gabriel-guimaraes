import express from 'express'
import cors from 'cors'
import { todos } from './variaveis'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/ping', (req,res) => {
    res.send('pong 🏓')
})
// pegar lista de afazeres baseado no status, ou seja, se ja foi concluída ou não.

app.get('/todos', (req,res) => {
    const status = req.query.status
    
    const toDoList = todos.filter(todo => {
        return todo.completed.toString() === status
    }).flat(1)
    res.send(toDoList)
})


// adicionar um item a lista de afazeres.

app.post('/todos', (req,res) => {
    type todo = {
        userId: number,
        id: string,
        title: string
        completed: boolean
    }
    const newToDo: todo = {
        userId: req.body.userId,
        id: Date.now().toString(),
        title: req.body.title,
        completed: req.body.completed
    }
    todos.push(newToDo)

    res.send(todos)
})

// edição do status de um afazer pelo seu id

app.put('/todos/:todoId', (req, res) => {
    const taskId = req.params.todoId
    const todo = todos.map(task => {
        if(Number(taskId) === task.id) {
            task.completed = !task.completed
        }
        return task
    }).flat(1)
    res.send(todo)
})

// deletar determinado afazer pelo id

app.delete('/todos/:todoId', (req,res) => {

    const id = req.params.todoId
    const toDo = todos.filter(task => {
        return task.id !== Number(id)
    }).flat(1)
    res.send(toDo)
})

// receber todos afazeres de um determinado id de usuário

// app.get('/todos/:userId', (req,res) => {

//     const id = req.params.userId
//     const toDo = todos.filter(task => {
//         return task.userId === Number(id)
//     }).flat(1)
//     res.send(toDo)
// })

// receber todos afazeres de um determinado id de usuário - o mesmo do de
// cima, porém este é do desafio.

app.get('/todos/:userId', (req,res) => {

    const id = req.params.userId
    const toDo = todos
    let userToDoList = []
    let restList = []
    for (let task of toDo) {
        if(task.userId === Number(id)) {
            userToDoList.push(task)
        }
        else{
            restList.push(task)
        }
    }
    type result = {
        selectedUsers: any[],
        others: any[]
    }
    const todoss: result = {
        selectedUsers: userToDoList,
        others: restList
    }
    res.send({todos: todoss})
})


app.listen(3003, () => {
    console.log('servidor funcionando na porta 3003')
})