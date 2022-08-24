import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
const app = express();

app.use(express.json());
app.use(cors());

// 1 - A resposta que temos é a mesma que vem do WorkBench, porém aqui ela ainda vem com alguns dados a mais, por isso é importante colocar para imprimir apenas a 1 casa do array, que no caso é a [0]

const searchActor = async (name: string) => {
  const result = await connection.raw(
   `SELECT * FROM Actor WHERE name = ${name}`
  )
  return result
}

const numberOfgender = async (gender: string) => {
const result = await connection.raw(
  `SELECT COUNT(*) as quantidade  FROM Actor WHERE gender = '${gender}'`
)
return result[0][0]
}


const attSalary = async (id: string, salary: number) => {

  const result = await connection("Actor")
  .update({salary: salary})
  .where({id: id})

}
const deleteActor = async (id: string, salary: number) => {

  const result = await connection("Actor")
  .delete()
  .where({id: id})

}
const avarageSalary = async (gender: string) => {

  const result = await connection("Actor")
 .avg("salary")
 .where({gender})
  return result[0]
}


app.get('/users/:id', async (req, res) => {
  try {
    const result = await connection("Actor")
    .where({id: req.params.id})
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage)
  }
})

app.get('/actor', async(req,res) => {
 try {
  const count = await numberOfgender(req.query.gender as string)
  res.status(200).send({quantidade: count})
 } catch (error: any) {
  res.status(500).send(error.message || error.sqlMessage)
 }
})
app.put('/actor', async(req,res) => {
 try {
  await connection("Actor")
  .update({
    salary: req.body.salary,
  })
  .where({id: req.body.id})
  res.status(200).send('atualizado com sucesso!')
 } catch (error: any) {
  res.status(500).send(error.message || error.sqlMessage)
 }
})
app.delete('/actor', async(req,res) => {
 try {
  await connection("Actor")
  .delete()
  .where({id: req.body.id})
  res.status(200).send('deletado com sucesso!')
 } catch (error: any) {
  res.status(500).send(error.message || error.sqlMessage)
 }
})

app.post('/movie', async (req, res) => {
  try {
    await connection
    .insert({
      nome: req.body.nome,
      sinopse: req.body.sinopse,
      data_lancamento: req.body.dataLancamento,
      avaliacao: req.body.avaliacao,
      data_limite: req.body.dataLimite
    })
    .into('Filmes')
    res.status(200).send('Filme criado com sucesso!')
  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage)
  }
})

app.get('/movie/all', async (req, res) => {
  try {
    const result = await connection("Filmes")
    .limit(15)
    res.status(200).send(result)
  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage)
  }
})

app.get('/movie/search', async (req, res) => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Filmes WHERE nome LIKE "%${req.query.query}%" OR sinopse LIKE "%${req.query.query}%" ORDER BY data_lancamento ASC`)
    res.status(200).send(result[0])
  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage)
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app