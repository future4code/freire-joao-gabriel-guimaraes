import React from "react";
import axios from "axios";
import PaginaUsuarios from "./PaginaUsuarios";
export default class PaginaCadastro extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
    usuariosCadastrados: [],
    paginas: "paginaCadastro",
  };

  criarUsuario = (event) => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            authorization: "joaoGabriel-guimaraes-labenu",
          },
        }
      )
      .then((response) => {
        alert(`Usuário ${this.state.inputNome} cadastrado!`);
        this.setState({ inputNome: "" });
        this.setState({ inputEmail: "" });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };
  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };
  chamaFuncao = () => {
    this.criarUsuario();
    this.paginaUsuario();
  };
  paginaUsuario = () => {
    this.setState({ paginas: "usuario" });
  };
  render() {
    switch (this.state.paginas) {
      case "usuario":
        return <PaginaUsuarios />;

      default:
    }

    return (
      <div>
        <div className="App">
          <h3>Faça seu cadastro</h3>
          <input
            type="text"
            onChange={this.onChangeInputNome}
            value={this.state.inputNome}
            placeholder="Nome"
            className="input1"
          />
          <br />
          <input
            type="text"
            onChange={this.onChangeInputEmail}
            value={this.state.inputEmail}
            placeholder="Email"
            className="input2"
          />
          <br />
          <button onClick={this.chamaFuncao} className="botao">
            Criar Usuário
          </button>
          <button onClick={this.paginaUsuario} className="botao">
            mudar de Página
          </button>
        </div>
      </div>
    );
  }
}
