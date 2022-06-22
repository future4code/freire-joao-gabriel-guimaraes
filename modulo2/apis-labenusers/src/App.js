
import './App.css';
import React from 'react';
import axios from 'axios'
import PaginaUsuarios from './components/PaginaUsuarios'
class App extends React.Component {
      state = {
        inputNome: "",
        inputEmail: "",
        usuariosCadastrados: [],
        pagina: 'paginaInicial'
      }
      componentDidMount = (event) => {
        this.listaUsuarios()
      }
    listaUsuarios = () => {
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
      {headers: {
        authorization: 'joaoGabriel-guimaraes-labenu'
      }}).then((response) => {
        this.setState({usuariosCadastrados: response.data})
        console.log(response.data)
      }).catch((error) => {
        alert(error.message)
      })
    }
    criarUsuário = (event) => {
      const body = {
        name: this.state.inputNome,
        email: this.state.inputEmail
      }

      axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
      body, 
        {headers: {
          authorization: 'joaoGabriel-guimaraes-labenu'
        }}).then((response) => {
            alert(`Usuário ${this.state.inputNome} cadastrado!`)
            this.listaUsuarios()
        }).catch((error) =>{
            alert(error.message)
        })
    }

    deletarUsuario = (id) => {
      if(window.confirm("tem certeza que deseja apagar?")){
         axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}` 
          ,{headers: {authorization: 'joaoGabriel-guimaraes-labenu'
        }}).then((response) => {
           alert('Usuário apagado com sucesso')
           this.listaUsuarios() 
          }).catch((error) => {
            alert(error.message)
          })
        }
  }

  
     
    onChangeInputNome = (event) => {
      this.setState({inputNome: event.target.value})
    }
    onChangeInputEmail = (event) => {
      this.setState({inputEmail: event.target.value})
    }
  render(){
      const lista = this.state.usuariosCadastrados.map((lista) => {
          return <li> <b>{lista.name}</b> <button className="botao1" onClick = {() => {this.deletarUsuario(lista.id)}}>X</button> </li>
      })
        

      
    return (
      <div>
      <div className="App">
        <h3>Faça seu cadastro</h3>
          <input type="text" onChange = {this.onChangeInputNome} value = {this.state.inputNome} placeholder = 'Nome' className="input1"/> <br />
          <input type="text" onChange = {this.onChangeInputEmail} value = {this.state.inputEmail} placeholder = 'Email' className="input2"/> <br />
          <button onClick = {this.criarUsuário} className="botao">Criar Usuário</button>
      </div>

           <div>
           <p className="lista"><h2>Lista de Usuários: </h2>{lista}</p> 
            </div> 
           
              
          
      </div>
    );
  }
 
}

export default App;
