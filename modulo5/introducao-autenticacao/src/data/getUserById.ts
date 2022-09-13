import connection from "../connection";


export async function getUserById(id: string): Promise<any> {

    const result = await connection
    .select('id','email')
    .from('User')
    .where({id})
    return result[0]
}