import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHistory, goToTeste } from "../../routes/coordinator";
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import './index.css'
import { useForm,} from "../../hooks/useForm";
import { useRequestData } from "../../services";
import { BASE_URL } from "../../constants/BASE_URL.js";
import { UserCard } from "../../components/UserCard";

const HomePage = () => {
  const navigate = useNavigate();
  const { nome } = useContext(GlobalContext)
  const { setNome } = useContext(GlobalContext)
  const { data } = useContext(GlobalContext)
  const {user, setUser} = useContext(GlobalContext)
  const {formValues, onChange, cleanFields} = useForm({username: ""})
  const [data1, isloading, getData] = useRequestData(`${BASE_URL}/users/${user}`)
  const EnviarFormulario = (event) => {
      event.preventDefault();
      cleanFields()
      getData()
      setNome([...nome, user])
      goToTeste(navigate, user)
    };
    console.log(data)
    return (
    <div className="container">
      <h1 > Github Users </h1>
      <button onClick={() => goToHistory(navigate)}> histórico de busca </button>
      <h3> procure por qualquer usuário do github para ter informações a respeito! </h3>
      
      <form onSubmit={EnviarFormulario}>
        <input
              type={"text"}
              placeholder="Novo nome"
              name="username"
              onChange= {e => setUser(e.target.value)}
              required
              value={user}
            ></input>
            <button>buscar</button>
        </form>
        
    </div>
    )
}
export default HomePage;