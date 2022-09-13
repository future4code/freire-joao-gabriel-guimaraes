import axios from "axios"
import { Request, Response } from "express"
import insertAdressDb from "../data/insertAdressDb"
import { getFullAddress } from "../services/getFullAddress"
import { Address } from "../types/typeAddress"


export const insertAdress = async (req: Request, res: Response) => {
   

   try { const cep = req.params.cep
    const result = await getFullAddress(cep)
    
    await insertAdressDb(result)
if(!result) {
    throw new Error('CEP inválido!')
}
    res.status(200).send("Endereço cadastrado com sucesso!")
}

    catch(error: any) {
        res.status(500).send(error.message)
    }
}