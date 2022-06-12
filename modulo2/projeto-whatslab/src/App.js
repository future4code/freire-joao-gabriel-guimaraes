import React from "react";
import styled from "styled-components";
import Mensagem from "./components/Mensagem/Mensagem";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: end;
  flex: 1 1 0%;
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  background-color: #e5ddd5;
`;

const Input = styled.input`
  width: 25%;
  height: 5vh;
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid white;
  &:focus {
    outline: none;
  }
`;
const Input1 = styled.input`
  width: 65%;
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid white;
  height: 5vh;
  &:focus {
    outline: none;
  }
`;
const Botao = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  width: 10%;
  background-color: whitesmoke;
  border: 1px solid whitesmoke;
  &:hover {
    background-color: darkgray;
    border-color: darkgray;
  }
  &:active {
    background-color: darkgray;
    border-color: darkgray;
  }
`;

const Container1 = styled.div`
  display: flex;
  padding: 12px;
`;

class App extends React.Component {
  state = {
    texto: [],
    valorInputNome: "",
    valorInputMensagem: "",
  };

  enviarMensagem = () => {
    const novaMensagem = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem,
    };
    const novoMensagem = [...this.state.texto, novaMensagem];
    this.setState({ texto: novoMensagem });
    this.setState({ valorInputMensagem: "" });
  };
  onChangeNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };
  onChangeMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };
  render() {
    const mensagens = this.state.texto.map((conversa) => {
      return <Mensagem nome={conversa.nome} mensagem={conversa.mensagem} />;
    });
    return (
      <Container>
        <GlobalStyle />
        {mensagens}
        <Container1>
          <Input
            placeholder={"Usuário"}
            onChange={this.onChangeNome}
            value={this.state.valorInputNome}
            type="text"
          />
          <Input1
            placeholder={"Mensagem"}
            onChange={this.onChangeMensagem}
            value={this.state.valorInputMensagem}
            type="text"
          />
          <Botao onClick={this.enviarMensagem}>
            <strong>Enviar</strong>
          </Botao>
        </Container1>
      </Container>
    );
  }
}

export default App;
