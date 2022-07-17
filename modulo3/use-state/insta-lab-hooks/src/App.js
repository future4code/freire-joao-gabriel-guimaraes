import React, { useState } from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"

const AppContainer = styled.div `
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
  height: 6vh;
  &:hover{
    background-color: #f3992b;
    box-shadow: #f8b768;
  }
`

const App = () => {
  
  const [posts, setPost] = useState([{nomeUsuario: 'Joao', fotoUsuario: 'https://picsum.photos/50/50', fotoPost: 'https://picsum.photos/200/150'} ])

  const [nomeUsuario1, setNomeUsuario1] = useState('')
  const [fotoUsuario1, setFotoUsuario1] = useState('')
  const [fotoPost1, setFotoPost1] = useState('')

    const onChangeNome = (e) => {
      setNomeUsuario1(e.target.value)
    }
    const onChangeFotoU = (e) => {
      setFotoUsuario1(e.target.value)
    }
    const onChangeFotoP = (e) => {
      setFotoPost1(e.target.value)
    }
    const onClickAdd = () => {
        const novoPost = {
          nomeUsuario: nomeUsuario1,
          fotoUsuario: fotoUsuario1,
          fotoPost: fotoPost1
        }
        const novapost = [...posts, novoPost]
        setPost(novapost)
        setFotoPost1('')
        setFotoUsuario1('')
        setNomeUsuario1('')
    }
    
    const post = posts.map((post) => {
          return <Post
          key = {post.nomeUsuario}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
    })
  return (
    
    <AppContainer>
      <Conjuntoinput>
      <Input1 type="text" onChange = {onChangeNome} value = {nomeUsuario1} 
      placeholder = 'nome do usuário'/>
      <Input2 type="text" onChange = {onChangeFotoU} value = {fotoUsuario1}
      placeholder = 'foto de perfil' />
      <Input2 type="text" onChange = {onChangeFotoP} value = {fotoPost1} 
      placeholder = 'foto post'/>
      <Botao onClick = {onClickAdd}>adicionar Post</Botao>
      </Conjuntoinput>
        
      {post}
    </AppContainer>
  );
}


export default App;
