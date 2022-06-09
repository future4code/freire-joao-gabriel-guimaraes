import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import marcacaoBranco from '../../img/marcacaoBranco.jpg'
import marcacaoPreto from '../../img/marcacaoPreto.jpg'
import enviar from '../../img/enviar.jpg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import SecaoEnviar from '../SecaoEnviar/SecaoEnviar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    marcacao: false,
    enviar: false
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    if(this.state.numeroCurtidas < 1){
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas : this.state.numeroCurtidas + 1
    })}
    else {
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas : this.state.numeroCurtidas - 1
      })}
  }
  

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
      
    })
  }
  onClickFotoSalva = () => {
    
    this.setState ({
      marcacao: !this.state.marcacao
    })
  }
  onClickEnviar = () => {
    this.setState ({
      enviar: !this.state.enviar
    })
  }
  aoEnviar = () => {
    console.log(`Post compartilhado no instagram`)
    this.setState({
      enviar: false
    })
  }
  

  
  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
      
    } else {
      iconeCurtida = iconeCoracaoBranco
      
    }
    let iconeMarcacao
    if(this.state.marcacao){
      iconeMarcacao = marcacaoPreto
      console.log('Foto salva!')
    }
    else{
      iconeMarcacao = marcacaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>

    }

    let componenteEnviar

    if(this.state.enviar){
      componenteEnviar = <SecaoEnviar aoEnviar= {this.aoEnviar} />
     
    }
   
    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
          
        />
        <IconeComContador
          icone={iconeMarcacao}
          onClickIcone={this.onClickFotoSalva}
          
          
        />
        <IconeComContador
          icone={enviar}
          onClickIcone={this.onClickEnviar}
          
          
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
          
        />
        
      </PostFooter>
      {componenteComentario}
      {componenteEnviar}
      
    </PostContainer>
  }
}

export default Post