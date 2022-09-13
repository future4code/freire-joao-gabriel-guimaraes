import { Request, Response } from "express";
import connection from "../connection";
import { GenerateId } from "../services/GenerateId";
import { user } from "../types/types";
import { generateToken } from "../services/GenerateToken";
import { createUser1 } from "../data/CreateUser";
export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { email, password } = req.body

      if ( !email || email.indexOf('@') === -1) {
         res.statusCode = 422
         throw new Error("email inválido!")
      }
      if ( !password || password.length < 6) {
         res.statusCode = 422
         throw new Error("Sua senha deve ter no mínimo 6 caracteres!")
      }

      const [user] = await connection('User')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = GenerateId()

      const newUser: user = { id, email, password }

      await createUser1(newUser) 

      const token = await generateToken({id})


      res.status(201).send({token})

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: error.message})
      } else {
         res.send({ message: error.message })
      }
   }
}