import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function insertAdressDb(adress: any) {

  const {cep, logradouro, numero, complemento, bairro, cidade, estado} = adress
  const id_user = Date.now().toString()
  const result = await connection("aula_servicos_adress")
  .insert({
    id_user,
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado
  })

}