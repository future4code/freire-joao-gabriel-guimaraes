import { Request, Response } from "express"
import {selectAllUsers1} from '../queryEndPoints/queryEndPoints'

export const getAllUsersType = async(req: Request,res: Response): Promise<void> =>{
   try {
      let type = req.params.type
      if(type !== 'CX' && type !== 'Teacher' && type !== 'Operations' ) {
        throw new Error('type not acceptable')
      }
      const users = await selectAllUsers1(type)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
}
