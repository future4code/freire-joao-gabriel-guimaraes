import axios from "axios";
import { baseURL } from "./baseURL";


// na função nomeada, o async vem no começo da função, antes de tudo. Já na arrow function, o async vem depois do igual, antes dos (). de resto o código é o mesmo.

type user = {
    id: string,
    name: string,
    email: string
}

const getAllSubscribers = async() : Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return (response.data.map((user: any) => {
        return ({
            id: user.id,
            name: user.name,
            email: user.email
        })
    })) 
}

// não, pois o retorno dessa função é justamente o que esta descrito no type user

const createNews = async () => {
    
}