import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import SelectLotery from '../../components/SelectLotery'
import { SwitchFunction } from "../../components/SwitchFunction";
const QuinaPage = () => {
    const navigate = useNavigate();
    const { nome } = useContext(GlobalContext)
    SwitchFunction(nome)
    return(
        <>
        
        <SelectLotery/>
        </>
    )
}
export default QuinaPage;