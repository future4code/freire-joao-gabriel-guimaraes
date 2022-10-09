import React from "react"
import { useContext } from 'react'
import {GlobalContext} from "../global/context/useContext.js"
import { loterias } from "../constants/loterias";
import { useForm } from "../hooks/useForm.js";

export const HomeSelectLotery = () => {
    const { nome } = useContext(GlobalContext)
    const { setNome } = useContext(GlobalContext)  
    const {formValues, onChange, cleanFields} = useForm({loterias: ""})
  
    return (
        <>
          <select name = 'loterias' onChange = {(e) => {setNome(e.target.value)}} label = 'loterias' value = {formValues.loterias}>
            <option value = {""}>Escolha uma loteria</option>
              {loterias.map((loteria) => {
                return (
            <option value = {loteria} key = {loteria} >
              {loteria}
            </option>
          )
        })}
      </select>   
        </>
    )
}
