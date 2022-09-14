import connection from "../connection";


export async function getUser(email: string): Promise<any> {

    const result = await connection
    .select('*')
    .from('User')
    .where({email})
    return result[0]
}