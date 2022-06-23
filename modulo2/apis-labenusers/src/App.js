import "./App.css";
import React from "react";
import axios from "axios";
import PaginaUsuarios from "./components/PaginaUsuarios";
import PaginaCadastro from "./components/PaginaCadastro";
import PaginaDetalhes from "./components/PaginaDetalhes";
class App extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
    usuariosCadastrados: [],
    pagina: "paginaCadastro",
  };
  
  trocarPagina = () => {
    switch (this.state.pagina) {
      case "paginaCadastro":
        return <PaginaCadastro mudarTela={this.irParaUsuarios} />;
      case "paginaUsuarios":
        return (
          <PaginaUsuarios
            mudarTela={this.irParaCadastro}
            detalhes={this.irParaDetalhes}
          />
        );
      case "paginaDetalhes":
        return <PaginaDetalhes mudarTela={this.irParaUsuarios} />;

      default:
        <div>Página não encontrada</div>;
    }
  };

  irParaCadastro = () => {
    this.setState({ pagina: "paginaCadastro" });
  };
  irParaUsuarios = () => {
    this.setState({ pagina: "paginaUsuarios" });
  };

  irParaDetalhes = () => {
    this.setState({ pagina: "paginaDetalhes" });
  };

  render() {
    return (
      <div>
        <p>{this.trocarPagina()}</p>
      </div>
    );
  }
}

export default App;
