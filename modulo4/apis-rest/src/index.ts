import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

// exercício 1

// a - Método GET, e a entidade seria /users

app.get('/users/:type', (req, res) => {
  const type = req.params.type
  const newList = users.filter(user => {
      return user.type === type
    })
  res.status(200).send(newList)
 
})

// utilizei params, pois por ele eu consigo passar um parâmetro por vez


app.get('/users', (req, res) => {
  try {const search = req.query.search
  
  if(search) {
    const [person] = users.filter(user => {
      return user.name === search
  })
  if(!person) {
    throw new Error("usuário não encontrado!")
  }
    const newList = users.filter(user => {
      return user.name === search

    })
    res.status(200).send(newList)
  }
else {
  res.status(200).send(users)
}}
catch (error: any) {
  res.status(404).send(error.message)
}
})

app.post('/users', (req,res) => {
  const {id, name, email, type, age} = req.body
  const newUser : User = {
    id,
    name,
    email,
    type,
    age
  }

  users.push(newUser)
  res.status(200).send(users)
})

app.put('/users/:id', (req,res) => {
  const id = Number(req.params.id)

  const newList = users.map(user => {
    if(user.id === id) {
        user.name += "ALTERADO"
    }
    return user
  })
  res.send(newList)
})

app.delete('/users/:id', (req,res) => {
  const id = Number(req.params.id)

  const newList = users.filter(user => {
    return user.id !== id
  })
  res.send(newList)
})