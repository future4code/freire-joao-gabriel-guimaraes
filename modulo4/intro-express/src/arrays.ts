type user = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

export const users: user[] = [
    {id: 1, name: 'joao', phone: '123-456', email: 'joao@gmail.com', website: 'www.joao.com'}, 
{id: 2, name: 'amandão', phone: '1234-4556', email: 'amands@gmail.com', website: 'www.amandinha.com'}, 
{id: 3, name: 'sidnei', phone: '1234-456', email: 'sidao@gmail.com', website: 'www.sidao.com'}, 
{id: 4, name: 'paulin', phone: '321-456', email: 'paulin@gmail.com', website: 'www.paulin.com'} ,
{id: 5, name: 'Raissa', phone: '123-654', email: 'raissa@gmail.com', website: 'www.raissa.com'}
]


type post = {
    id: number,
    title: string,
    body: string,
    userId: number
}

export const posts: post[] = [
{id: 1, title: 'hello hello', body: 'world world', userId: 1},
{id: 2, title: 'hello hello1', body: 'world world1', userId: 1},
{id: 3, title: 'hello hello2', body: 'world world2', userId: 2},
{id: 4, title: 'hello hello3', body: 'world world3', userId: 2},
{id: 5, title: 'hello hello4', body: 'world world4', userId: 3},
{id: 6, title: 'hello hello5', body: 'world world5', userId: 3},
{id: 7, title: 'hello hello6', body: 'world world6', userId: 4},
{id: 8, title: 'hello hello7', body: 'world world7', userId: 4},
{id: 9, title: 'hello hello8', body: 'world world8', userId: 5},
{id: 10, title: 'hello hell9', body: 'world world9', userId: 5}
]