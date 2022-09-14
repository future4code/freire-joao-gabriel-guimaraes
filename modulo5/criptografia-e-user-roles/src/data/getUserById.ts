import connection from "../connection";


export async function getUserById(id: string): Promise<any> {

    const result = await connection
    .select('id','email', 'role')
    .from('User')
    .where({id})
    return result[0]
}