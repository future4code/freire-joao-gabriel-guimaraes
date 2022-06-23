import React from "react";
import PaginaUsuarios from "./PaginaUsuarios";
import axios from "axios";

class PaginaDetalhes extends React.Component {
  state = {
    Nome: "",
    Email: "",
    usuariosCadastrados: [],
    usuariosDetalhe: [],
    paginas: "detalhes",
  };
  paginaUsuario = () => {
    this.setState({ paginas: "usuario" });
  };

  onChangeNome = (event) => {
    const novoNome = event.target.value;
    this.setState({ Nome: novoNome });
  };
  onChangeEmail = (event) => {
    const novoEmail = event.target.value;
    this.setState({ Email: novoEmail });
  };
  componentDidMount() {
    this.getUserDetail();
  }

  getUserDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.usuario.id}`,
        { headers: { authorization: "joaoGabriel-guimaraes-labenu" } }
      )
      .then((response) => {
        this.setState({ detalheUsuario: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  mudarUsuario = () => {
    const body = {
      name: this.state.Nome,
      email: this.state.Email,
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.usuario.id}`,
        body,
        { headers: { authorization: "joaoGabriel-guimaraes-labenu" } }
      )
      .then(() => {
        this.setState({ Nome: "", Email: "" });
        this.props.buscarUsuario();
        this.getUserDetail();
        alert(`Usuário ${this.state.Nome} editado com sucesso!`);
      });
  };

  render() {
    switch (this.state.paginas) {
      case "usuario":
        return <PaginaUsuarios />;

      default:
    }

    return (
      <div>
        <div>
          <div className="lista">
            <h2>Usuário:</h2> <p>{this.props.usuario.name}</p>
            <p>{this.props.usuario.email}</p>
            <input
              type="text"
              onChange={this.onChangeNome}
              value={this.state.Nome}
            />
            <input
              type="text"
              onChange={this.onChangeEmail}
              value={this.state.Email}
            />
            <button onClick={this.mudarUsuario} className="botao">
              editar usuario
            </button>
            <button onClick={this.paginaUsuario} className="botao">
              voltar para lista de usuários
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PaginaDetalhes;
