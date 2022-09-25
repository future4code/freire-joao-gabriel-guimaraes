import axios from "axios";
import { baseURL } from "./baseURL";

type newNews = {
    title: string,
    content: string,
    date: number | string
}

const news: newNews = {
    title: 'letsgo guys',
    content: 'aloha muchachos',
    date: Date.now()
}

const createNews = async (news: newNews) : Promise <void>=> {
    return await axios.put(`${baseURL}/news`, news)
   
}

const main = async(): Promise<void> => {
    try {
        createNews(news)
    } catch (error: any) {
        const resp = error.response.data || error.message
        console.log(resp)
    }
}