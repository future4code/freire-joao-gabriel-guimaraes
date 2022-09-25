import axios from "axios";
import { baseURL } from "./baseURL";

// O promise all faz todas as requisições juntas, esperar todas serem concluidas para então trazer a resposta.

// Todos os usuários receberiam as respostas ao mesmo tempo.

type user = {
	id: string;
	name: string;
	email: string;
}
const sendNotification = async (users: user[], message: string) => {

    try {
        const response =  users.map(user => {
             axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
        })
        await Promise.all(response)
        console.log("all Notifications sent")
    } catch (error: any) {
        console.log("Error")
    }

}