import React from "react";
import axios from "axios";
import PaginaDetalhes from "./PaginaDetalhes";
import PaginaCadastro from "./PaginaCadastro";

class PaginaUsuarios extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
    usuariosCadastrados: [],
    pagina: "usuario",
    usuariosDetalhe: [],
    buscaUsuario: [],
    procuraUsuario:''
  };
  componentDidMount = (event) => {
    this.listaUsuarios();
  };
  listaUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            authorization: "joaoGabriel-guimaraes-labenu",
          },
        }
      )
      .then((response) => {
        this.setState({ usuariosCadastrados: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  deletarUsuario = (id) => {
    if (window.confirm("tem certeza que deseja apagar?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          { headers: { authorization: "joaoGabriel-guimaraes-labenu" } }
        )
        .then((response) => {
          alert("Usuário apagado com sucesso");
          this.listaUsuarios();
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  detalhesUsuario = (id) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        { headers: { authorization: "joaoGabriel-guimaraes-labenu" } }
      )
      .then((response) => {
        // console.log(response.data)
        this.setState({ usuariosDetalhe: response.data });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  buscarUsuario = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.procuraUsuario}&email=`, 
    {headers: {authorization: 'joaoGabriel-guimaraes-labenu'}}
    ).then((response) => {
      this.setState({usuariosCadastrados: response.data})
    })
  }
  onChangeBuscaUsuario = (event) => {
    this.setState({procuraUsuario: event.target.value})
  }

  paginaDetalhe = () => {
    this.setState({ pagina: "detalhes" });
  };
  paginaCadastro = () => {
    this.setState({ pagina: "Cadastro" });
  };
  chamaFuncao = (id) => {
    this.paginaDetalhe();
    this.detalhesUsuario(id);
  };

  render() {
    switch (this.state.pagina) {
      case "detalhes":
        return <PaginaDetalhes usuario={this.state.usuariosDetalhe} buscarUsuario = {this.buscarUsuario} />;
      case "Cadastro":
        return <PaginaCadastro />;

      default:
    }

    const lista = this.state.usuariosCadastrados.map((lista) => {
      return (
        <li>
          {" "}
          <b
            onClick={() => {
              this.chamaFuncao(lista.id);
            }}
          >
            {lista.name}
          </b>{" "}
          <button
            className="botao1"
            onClick={() => {
              this.deletarUsuario(lista.id);
            }}
          >
            X
          </button>
        </li>
      );
    });

    return (
      <div>
        <div>
          <div className="lista">
            <h2>Lista de Usuários: </h2>
            {lista}
            <input
          type='text'
          value = {this.state.procuraUsuario}
          onChange = {this.onChangeBuscaUsuario}
          />
          <button onClick={this.buscarUsuario} className="botao">
            buscar Usuário
          </button>

          <button onClick={this.paginaCadastro} className="botao">
            mudar de Página
          </button>
          </div>
         
         
        </div>
      </div>
    );
  }
}

export default PaginaUsuarios;
