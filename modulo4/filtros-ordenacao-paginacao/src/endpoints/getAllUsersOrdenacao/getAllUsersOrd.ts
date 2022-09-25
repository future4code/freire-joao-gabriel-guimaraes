import { Request, Response } from "express"
import {selectAllUsers2 }from "../queryEndPoints/queryEndPoints"

export const getAllUsersOrd = async(req: Request,res: Response): Promise<void> =>{
   try {
      let sort = req.query.sort
      let order = req.query.order
      if(order !== 'asc' && order !== 'desc') {
        order = 'asc'
      }
      if(!sort) {
        sort = 'email'
      }
      const users = await selectAllUsers2(sort, order)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
}
