import axios from "axios";
import { baseURL } from "./baseURL";

type user = {
	id: string;
	name: string;
	email: string;
}
const sendNotification = async (users: user[], message: string) => {

    try {
        for(let user of users){
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
            console.log("All notifications sent")
        }
    } catch (error: any) {
        console.log("Error")
    }

}