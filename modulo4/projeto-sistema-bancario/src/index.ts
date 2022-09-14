import express, { Request, Response } from 'express'
import cors from 'cors'
import { isExportDeclaration } from 'typescript'
type extrato = {
  valor: number,
  data?: string,
  descricao: string
}
type User = {
  name: string,
  cpf: string,
  nascimento: string,
  saldo: number,
  extrato: extrato[],
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
    name: "Alice",
    cpf: "159.123.554-11",
    nascimento: '22/12/1956',
    saldo: 12,
    extrato: [{
      valor: 25, data: '22/07/2022', descricao: 'lojas americanas'
    }]
  },
  {
    name: "Bob",
    cpf: "159.123.554-12",
    nascimento: '15/10/1999',
    saldo: 36,
    extrato: [{
      valor: 25, data: '23/05/2022', descricao: 'compras do mês'
    }]
  },
  {
    name: "Afonso",
    cpf: "159.123.554-13",
    nascimento: '15/07/1998',
    saldo: 21,
    extrato: [{
      valor: 25, data: '12/02/2022', descricao: 'presente do filhão'
    }]
  },

]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.post('/user', (req, res) => {
  try {
    const { name, cpf, nascimento } = req.body
    const newUser: User = {
      name,
      cpf,
      nascimento,
      saldo: 0,
      extrato: []
    }
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const anoNascParts = nascimento.split('/');
    const diaNasc = anoNascParts[0];
    const mesNasc = anoNascParts[1];
    const anoNasc = anoNascParts[2];
    let idade = anoAtual - anoNasc;
    let mesAtual = dataAtual.getMonth() + 1;
    if (mesAtual < mesNasc) {
      idade--;
    }
    else {
      if (mesAtual == mesNasc) {
        if (new Date().getDate() < diaNasc) {
          idade--;
        }
      }
    }
    const [person] = users.filter(user => {
      return user.cpf === cpf
    })
    if (person) {
      throw new Error('CPF já cadastrado. Verifique os dados enviados e tente novamente.')
    }
    if (idade < 18) {
      throw new Error('Você tem que ser maior de idade para abrir uma conta no banco!!')
    }

    users.push(newUser)
    res.status(200).send(users)
  }
  catch (error: any) {
    switch (error.message) {
      case 'Você tem que ser maior de idade para abrir uma conta no banco!!':
        res.status(422).send(error.message)
        break;
      case 'CPF já cadastrado. Verifique os dados enviados e tente novamente.':
        res.status(422).send(error.message)
        break;
      default:
        res.status(500).send('erro no servidor, favor verificar com os superiores.')
        break;
    }
  }
})

app.get('/user/:cpf', (req, res) => {
  try {
    const cpf = req.params.cpf

    const newArray: number[] = users.filter(user => {
      return user.cpf === cpf
    }).map(user => {
      return user.saldo
    })

    if (!newArray || newArray.length === 0) {
      throw new Error("Usuário não encontrado!")
    }


    res.status(200).send({ saldo: newArray[0] })
  }
  catch (error: any) {
    switch (error.message) {
      case "Usuário não encontrado!":
        res.status(404).send(error.message)
        break;
      default:
        res.status(500).send('erro no servidor, favor verificar com os superiores.')
        break;
    }
  }
})

app.put('/user', (req, res) => {
  try {
    const { nome, cpf, valor, data } = req.body
    if (!nome || !cpf || !valor) {
      throw new Error('faltou dados na requisição. Verifique novamente')
    }
    const [nomezin] = users.filter(user => {
      if (nome === user.name && cpf === user.cpf) {
        return user
      }
    })

    if (!nomezin) {
      throw new Error('Dados inválidos, verifique e tente novamente.')
    }
    const newList = users
    for (let user of newList) {
      if (nome === user.name) {
        if (cpf === user.cpf) {
          user.saldo += valor
          const nn: extrato = {
            valor: Number(valor),
            data: data,
            descricao: 'depósito de dinheiro'
          }
          user.extrato.push(nn)
        }
      }
    }
    res.status(200).send(newList)
  }

  catch (error: any) {
    switch (error.message) {
      case 'faltou dados na requisição. Verifique novamente':
        res.status(404).send(error.message)
        break;
      case 'Dados inválidos, verifique e tente novamente.':
        res.status(404).send(error.message)
        break;
      default:
        res.status(500).send('erro no servidor, favor verificar com os superiores.')
        break;
    }
  }
})

app.post('/user/pagamento', (req, res) => {
  try {
    let { data, descricao, valor, cpf } = req.body
    if (data === undefined) {
      let data1 = new Date()
      let mes: any = data1.getMonth() + 1
      if (mes < 10) {
        mes = `0${data1.getMonth() + 1}`
      }
      let dia: any = new Date().getDate()
      if (dia < 10) {
        dia = `0${new Date().getDate()}`
      }
      data = `${dia}/${mes}/${data1.getFullYear()}`
    }
    const newList = users
    for (let user of newList) {
      if (user.cpf === cpf) {
        if (user.saldo < valor) {
          throw new Error("saldo insuficiente")
        }
        else {
          const novoPagamento: extrato = {
            valor: Number(valor),
            data,
            descricao
          }
          user.extrato.push(novoPagamento)
        }

      }
    }
    res.status(200).send(newList)
  }
  catch (error: any) {
    switch (error.message) {
      case 'saldo insuficiente':
        res.status(404).send(error.message)
        break;
      // case 'Dados inválidos, verifique e tente novamente.':
      //   res.status(404).send(error.message)
      //   break;
      default:
        res.status(500).send('erro no servidor, favor verificar com os superiores.')
        break;
    }
  }
})


app.put('/user/saldo/:cpf', (req, res) => {
  const cpf = req.params.cpf
  const newArray = users.filter(user => {
    if (cpf === user.cpf) {
      const array = user.extrato.map(user => {
        return user.valor
      })
      let total = array.reduce((total, numero) => total + numero, 0)
      user.saldo += total
      return user
    }

  })
  res.status(200).send(newArray)
})

app.post('/user/transferencia', (req, res) => {
  try {
    const { nomeUser, cpfUser, nomeDestinatario, cpfDestinatario, valor, descricao } = req.body

  let data1 = new Date()
  let mes: any = data1.getMonth() + 1
  if (mes < 10) {
    mes = `0${data1.getMonth() + 1}`
  }
  let dia: any = new Date().getDate()
  if (dia < 10) {
    dia = `0${new Date().getDate()}`
  }
  const data = `${dia}/${mes}/${data1.getFullYear()}`

  const newList = users

  for (let user of newList) {
    if (user.cpf === cpfUser) {
      if (user.name === nomeUser) {
        if (user.saldo < valor) {
          throw new Error("Saldo insuficiente!!")
        }
        else {
          const novaTransferencia: extrato = {
            valor: (valor) * -1,
            data: data,
            descricao,
          }
          user.extrato.push(novaTransferencia)
        }
        

      }
    }
  }
  for (let user of newList) {
    if (user.cpf === cpfDestinatario) {
      if (user.name === nomeDestinatario) {
        const novaTransferencia: extrato = {
          valor,
          data: data,
          descricao,
        }
        user.extrato.push(novaTransferencia)

      }
    }
  }
  res.status(200).send(newList)
}
catch (error: any) {
  switch (error.message) {
    case 'Saldo insuficiente!!':
      res.status(404).send(error.message)
      break;
    
    default:
      res.status(500).send('erro no servidor, favor verificar com os superiores.')
      break;
  }
}
})

app.get('/user', (req, res) => {
  res.status(200).send(users)
})










app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
