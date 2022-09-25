import { connection } from "../../data/connection"

export  async function selectAllUsers(name: any):Promise<any> {
    const result = await connection
    .select('*')
    .from('aula48_exercicio')
    .where("name", 'like', `%${name}%`)
 
    return result
 }

 export  async function selectAllUsers1(type: any):Promise<any> {
    const result = await connection
    .select('*')
    .from('aula48_exercicio')
    .where("type", 'like', `%${type}%`)
 
    return result
 }

 export  async function selectAllUsers2(sort: any, order: any):Promise<any> {
    const result = await connection
    .select('*')
    .from('aula48_exercicio')
    .orderBy(sort, order)
 
    return result
 }

 export  async function selectAllUsers3(type: any, name: any, sort: any, order: any, limit: any, offset: any):Promise<any> {
       const result = await connection
        .select('*')
        .from('aula48_exercicio')
        .where("type", 'like', `%${type}%`)
        .where("name", 'like', `%${name}%`)
        .orderBy(sort, order)
        .limit(limit)
        .offset(offset)
     
        return result
 }