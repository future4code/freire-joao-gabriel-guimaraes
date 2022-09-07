import { Request, Response } from "express"
import { connection } from "../../data/connection"
import { recipe } from "../../types"
import {selectAllUsers} from "../queryEndPoints/queryEndPoints"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      let name = req.query.name
      const users = await selectAllUsers(name)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}
