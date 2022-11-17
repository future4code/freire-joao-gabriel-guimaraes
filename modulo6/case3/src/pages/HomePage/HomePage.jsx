import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHistory, goToTeste } from "../../routes/coordinator";
import { useContext } from 'react'
import {GlobalContext} from "../../global/context/useContext.js"
import './index.css'
import styled from 'styled-components'

const Header = styled.div `

`
const Container = styled.div `
  display: grid;
  grid-template-rows: 60px 1fr;
`
const Conteudo = styled.div `

`


const HomePage = () => {
  const navigate = useNavigate();
  const { userList,
          setUserList,
          user,
          setUser } = useContext(GlobalContext)

  const EnviarFormulario = (event) => {
      event.preventDefault();
      setUserList([...userList, user])
      goToTeste(navigate, user)
    };
    return (
    <Container className="container">
      <Header>
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
        </Header>
        <Conteudo>
        <h1 > Github Users </h1>
      <button onClick={() => goToHistory(navigate)}> histórico de busca </button>
      <h3> procure por qualquer usuário do github para ter informações a respeito! </h3>
        </Conteudo>
      
      
      
        
    </Container>
    )
}
export default HomePage;


