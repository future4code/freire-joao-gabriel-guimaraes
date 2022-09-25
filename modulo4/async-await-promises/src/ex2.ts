import axios from "axios";
import { baseURL } from "./baseURL";



// na função nomeada, o async vem no começo da função, antes de tudo. Já na arrow function, o async vem depois do igual, antes dos (). de resto o código é o mesmo.

const getAllSubscribers = async() : Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return (response.data) 
}