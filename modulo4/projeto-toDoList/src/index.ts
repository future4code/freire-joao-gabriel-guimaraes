import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express()

app.use(express.json())
app.use(cors())

app.post('/user', async (req, res) => {
    try {
        await connection
            .insert({
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            })
            .into("users")
        if (!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error('Faltam dados na sua requisição!')
        }
        res.status(200).send("Usuário criado com sucesso!")
    } catch (error: any) {
        if (error.message === 'Faltam dados na sua requisição!') {
            res.status(404).send(error.message)
        }
        else {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
})

app.get('/user/:id', async (req, res) => {
    try {
        const result = await connection
            .select("id", "nickname")
            .from("users")
            .where({ id: req.params.id })
        if (result.length === 0) {
            throw new Error('Usuário não encontrado!')
        }
        res.status(200).send(result)
    } catch (error: any) {
        if (error.message === 'Usuário não encontrado!') {
            res.status(404).send(error.message)
        }
        else {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
})

app.put('/user/edit/:id', async (req, res) => {
    try {
        await connection("users")
            .update({
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            })
            .where({ id: req.params.id })
        res.status(200).send('Usuário editado com sucesso!')
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.post('/task', async (req, res) => {

    try {
        await connection
            .insert({
                title: req.body.title,
                description: req.body.description,
                limit_date: req.body.limitDate,
                creator_user_id: req.body.creatorUserId
            })
            .into('tasks')
        if (!req.body.title || !req.body.description || !req.body.limitDate || !req.body.creatorUserId) {
            throw new Error('Faltam dados na requisição!')
        }
        res.status(200).send('tarefa criada com sucesso!')
    }
    catch (error: any) {
        if (error.message === 'Faltam dados na sua requisição!') {
            res.status(404).send(error.message)
        }
        else {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
})

app.get('/task/:id', async (req, res) => {

    try {
        const result = await connection
            .select('*')
            .from('tasks')
            .where({ id: req.params.id })
        const result1 = await connection.raw(`
        SELECT nickname, users.name, tasks.id
        FROM users
        JOIN relationUserTasks
        ON responsible_user_id = users.id
        JOIN tasks
        ON tasks_id = tasks.id`)

        const array = result1[0].filter((task: { id: number; }) => { return task.id === Number(req.params.id) })



        if (result.length === 0) {
            throw new Error('Tarefa não encontrada!')
        }
        else { res.status(200).send(result) }

    } catch (error: any) {
        if (error.message === 'Tarefa não encontrada!') {
            res.status(404).send(error.message)
        }
        else {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }

})


app.get('/user/all', async (req, res) => {

    try {
        const result = await connection.raw(`
        SELECT * FROM users`)

        res.status(200).send(result[0])

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)

    }

})

app.get('/task', async (req, res) => {
    try {
        const result = await connection
            .select('*')
            .from('tasks')
            .where({ creator_user_id: req.query.creatorUserId })
        if (!req.query.creatorUserId) {
            throw new Error('Faltam dados na requisição!')
        }
        res.status(200).send(result)
    } catch (error: any) {
        if (error.message === 'Faltam dados na requisição!') { res.status(404).send(error.message) }

        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.post('/task/responsible', async (req, res) => {
    try {
        await connection
            .insert({
                tasks_id: req.body.taskId,
                responsible_user_id: req.body.responsibleId
            })
            .into('relationUserTasks')
        res.status(200).send('Usuário responsável atribuído com sucesso!')
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get('/task/:id/responsible', async (req, res) => {
    try {
        const result = await connection.raw(`
        SELECT nickname, users.name, tasks.id
        FROM users
        JOIN relationUserTasks
        ON responsible_user_id = users.id
        JOIN tasks
        ON tasks_id = tasks.id`)

        const array = result[0].filter((task: { id: number; }) => { return task.id === 1 })
        res.status(200).send(array)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})















const server = app.listen(3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    }
    else {
        console.error('Failure upon starting server.')
    }
})