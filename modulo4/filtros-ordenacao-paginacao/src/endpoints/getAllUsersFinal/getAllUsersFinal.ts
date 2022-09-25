import { Request, Response } from "express"
import {selectAllUsers3} from '../queryEndPoints/queryEndPoints'

export const getAllUsersFinal = async(req: Request,res: Response): Promise<void> =>{
   try {
      let type = req.query.type
      let name = req.query.name
      let sort = req.query.sort
      let order = req.query.order
      const limit = 5
      let page = Number(req.query.page)
      

      if (page < 1 || isNaN(page)){
        page = 1
      }
      let offset = (page-1) * limit
      
      if(order !== 'asc' && order !== 'desc' || !order) {
        order = 'desc'
      }

      if(!sort) {
        sort = 'name'
      }
      if(!name) {
        name = ''
      }
      if(!type) {
        type = ''
      }
      
      
      const users = await selectAllUsers3(type, name, sort, order, limit, offset)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
}
