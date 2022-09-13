import axios from "axios"
import { Request, Response } from "express"
import { getFullAddress } from "../services/getFullAddress"
import { Address } from "../types/typeAddress"


export const getAddress = async (req: Request, res: Response) => {
   
    
    try {
        const cep = req.params.cep
    const result = await getFullAddress(cep)
    res.status(200).send(result)}
    catch (error: any) {
        res.status(500).send(error.message)
    }

}