import { getAllUsers } from "./endpoints/getAllUsers/getAllUsers";
import { getAllUsersType } from "./endpoints/getAllUsers-type/getAllUsersType";
import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAllUsersOrd } from "./endpoints/getAllUsersOrdenacao/getAllUsersOrd";
import { getAllUsersFinal } from "./endpoints/getAllUsersFinal/getAllUsersFinal";

export const app = express()

app.use(express.json())
app.use(cors())


app.get("/user", getAllUsers)
app.get("/users1", getAllUsersFinal)
app.get("/user/:type", getAllUsersType)
app.get("/users/ordenado", getAllUsersOrd)


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})


