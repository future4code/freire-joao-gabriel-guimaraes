import React from "react";
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import './index.css'
import { SwitchFunction } from "../../components/SwitchFunction";
import { HomeSelectLotery } from "../../components/HomeSelectLotery.js";

const HomePage = () => {
  const { nome } = useContext(GlobalContext)
  SwitchFunction(nome)
    return (
    <div className="container">
      <h1 > Iniciando Projeto </h1>   
        <p>Descubra os resultados das loterias de forma fácil e rápida!</p>
        <HomeSelectLotery/>
    </div>
    )
}
export default HomePage;