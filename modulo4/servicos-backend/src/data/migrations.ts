import { connection } from "./connection"
const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
      CREATE TABLE IF NOT EXISTS aula_servicos_adress (
         id_user VARCHAR(255) PRIMARY KEY,
         logradouro VARCHAR(255) NOT NULL,
         numero INT NOT NULL,
         complemento VARCHAR(255),
         bairro VARCHAR(255) NOT NULL,
         cidade VARCHAR(255) NOT NULL,
         estado VARCHAR(255) NOT NULL
      );
   `)
   .then(() => { console.log("Tabela criada") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(() => console.log("Banco pronto!"))
   .finally(closeConnection)
