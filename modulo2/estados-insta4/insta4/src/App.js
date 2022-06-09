import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Conjuntoinput = styled.div `
  margin: 5vh 0vh;
  
`
const Input1 = styled.input `
  margin-right: 1vw;
  height: 5vh;
`
const Input2 = styled.input `
  margin-right: 1vw;
  height: 5vh;
`
const Botao = styled.button `
  background-color: #f8b768;
  border: 1px solid #f8b768;
  height: 5vh;
  &:hover{
    background-color: #f3992b;
    box-shadow: #f8b768;
  }

`

class App extends React.Component {
  state = {
   contas: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Humberto',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'Adolfo',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      },
    ],
      ValorInputNome: '',
      ValorInputFotoUsuario: '',
      ValorInputFotoPost: '',

  }
    addPessoa = () => {
        const novoUsuario = {
          nomeUsuario: this.state.ValorInputNome,
          fotoUsuario: this.state.ValorInputFotoUsuario,
          fotoPost: this.state.ValorInputFotoPost
        };

        const novaUsuario = [...this.state.contas, novoUsuario];

        this.setState({contas: novaUsuario})
        this.setState({ValorInputNome: ''})
        this.setState({ValorInputFotoUsuario: ''})
        this.setState({ValorInputFotoPost: ''})
        
    }

    onChangeInputNome = (event) => {
      this.setState({ValorInputNome: event.target.value})
    }
    onChangeInputFotoUsuario = (event) => {
      this.setState({ValorInputFotoUsuario: event.target.value})
    }
    onChangeInputFotoPost = (event) => {
      this.setState({ValorInputFotoPost: event.target.value})
    }

  
  render() {
    const pessoas = this.state.contas.map((conta) => {
        return (
          <Post nomeUsuario = {conta.nomeUsuario}
          fotoUsuario = {conta.fotoUsuario}
          fotoPost = {conta.fotoPost} />
          
        );
    })
    return (
      <MainContainer>
        <Conjuntoinput>
          <Input1
          value = {this.state.ValorInputNome}
          onChange = {this.onChangeInputNome}
          placeholder = {'nome do usuário'}
          />
           <Input2
          value = {this.state.ValorInputFotoUsuario}
          onChange = {this.onChangeInputFotoUsuario}
          placeholder = {'cole aqui o link da sua foto de usuário'}
          />
           <Input2
          value = {this.state.ValorInputFotoPost}
          onChange = {this.onChangeInputFotoPost}
          placeholder = {'cole aqui o link da foto a ser postada'}
          />
          <Botao onClick={this.addPessoa}>Adicionar</Botao>
        </Conjuntoinput>
        {pessoas}
      </MainContainer>
    );
  }
}

export default App;
