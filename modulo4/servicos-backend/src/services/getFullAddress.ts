import axios from "axios"
import { Request, Response } from "express"
// import { getFullAdress } from "../services/getFullAddress"
import { Address } from "../types/typeAddress"


export const getFullAddress = async (cep: any) => {
   
    
    try {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/ `)
    const address: Address = {
        cep: result.data.cep,
        logradouro: result.data.logradouro,
        numero: 1,
        complemento: result.data.complemento,
        bairro: result.data.bairro,
        cidade: result.data.localidade,
        estado: result.data.uf
    }
   return address}
    catch (error: any) {
       console.log(error.message)
    }

}