import axios from "axios";
import { baseURL } from "./baseURL";


async function  getAllSubscribers(): Promise<any[]>{
 const response = await axios.get(`${baseURL}/subscribers`)
    return (response.data) 
}

