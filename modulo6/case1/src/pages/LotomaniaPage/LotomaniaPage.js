import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import SelectLotery from '../../components/SelectLotery'
import { SwitchFunction } from "../../components/SwitchFunction";
import styled from "styled-components";

const Div = styled.div`
    height: 1fr;
    background-color: #FFAB64;
`
const LotomaniaPage = () => {
    const navigate = useNavigate();
    const { nome } = useContext(GlobalContext)
    SwitchFunction(nome)
    return(
        <Div>
     
        <SelectLotery nome = {nome} />
        </Div>
    )
}
export default LotomaniaPage;