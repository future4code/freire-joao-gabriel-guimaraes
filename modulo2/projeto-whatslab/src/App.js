import React from 'react';
import styled from 'styled-components';
import Mensagem from './components/Mensagem/Mensagem'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const Container = styled.div `
    display: flex;
    margin: auto;
    flex-direction: column;
     justify-content: end;
    flex: 1 1 0%;
    max-width: 600px;
    height: 100vh;
    border: 1px solid black; 
    
`


const Input = styled.input `
    width: 25%;
    height: 5vh;
`
const Input1 = styled.input `

    width: 70%;
`
const Botao = styled.button `
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    width: 7,5%;
`

const Container1 = styled.div `
display: flex;


`

class App extends React.Component  {

  state = {
    texto: [],
    valorInputNome: "",
    valorInputMensagem: "",
  }

  enviarMensagem = () => {
    const novaMensagem = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem,
    }
    const novoMensagem = [...this.state.texto, novaMensagem]
    this.setState({texto: novoMensagem})
    this.setState({valorInputNome: ""})
    this.setState({valorInputMensagem: ""})
  }
  onChangeNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }
  onChangeMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value})
  }
  render(){
    const mensagens = this.state.texto.map((conversa) => {
      return (
        
        <Mensagem
        nome = {conversa.nome} mensagem = {conversa.mensagem}
         />
      )
    })
  return (
    
    <Container>
      <GlobalStyle  />
        {mensagens}
        <Container1>
        <Input placeholder={'nome'} onChange={this.onChangeNome} value = {this.state.valorInputNome} />
        <Input1 placeholder={'mensagem'} onChange={this.onChangeMensagem} value = {this.state.valorInputMensagem} />
        <Botao onClick={this.enviarMensagem}>Enviar</Botao>
        </Container1>
    </Container>
    
    
     
  );
  }
}

export default App;
