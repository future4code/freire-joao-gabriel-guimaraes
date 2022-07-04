import axios from "axios";
import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  background-color: black;
  color: #34b3f1;
  font-size: 30px;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Conteudo = styled.div`
  display: flex;
  flex-direction: row;
  width: 40vw;
  justify-content: space-between;
  margin-bottom: 5px;
  border-radius: 5px;
  padding-left: 5px;
  /* border: 2px solid white; */
  &:hover {
    cursor: pointer;
    background-color: #34b3f1;
    color: white;
  }
`;
const Botao = styled.button`
  background-color: black;
  color: red;
  &:hover {
    cursor: pointer;
  }
`;
const Botao1 = styled.button`
  background-color: #eeeeee;
  color: black;
  width: 10%;
  height: 3%;
  border-radius: 15px;

  &:hover {
    box-shadow: 0 5px 5px 0 rgba(238, 238, 238, 0.267),
      0 5px 5px 0 rgba(238, 238, 238, 0.267);
  }
`;
const Li = styled.li`
  width: 100%;
`;

class PlaylistPage extends React.Component {
  state = {
    playlistList: [],
  };
  componentDidMount() {
    this.getAllPlaylist();
  }
  getAllPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, { headers: { authorization: "joaoGabriel-guimaraes-labenu" } })
      .then((response) => {
        this.setState({ playlistList: response.data.result.list });
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  deletePlaylist = (id, name) => {
    if (window.confirm(`tem certeza que deseja deletar a playlist ${name}?`)) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;

      axios
        .delete(url, {
          headers: { authorization: "joaoGabriel-guimaraes-labenu" },
        })
        .then(() => {
          this.getAllPlaylist();
          alert(`Playlist ${name} deletada com sucesso!`);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };
  render() {
    const list = this.state.playlistList.map((list) => {
      return (
        <Conteudo>
          <Li
            key={list.name}
            onClick={() => {
              this.props.changeToDetails(list.id, list.name);
            }}
          >
            {list.name}
          </Li>{" "}
          <Botao
            onClick={() => {
              this.deletePlaylist(list.id, list.name);
            }}
          >
            X
          </Botao>
        </Conteudo>
      );
    });

    return (
      <Container>
        <GlobalStyle />
        <h1>Playlists:</h1>
        {list.length === 0 && <div>Carregando...</div>}
        <ul>{list}</ul>
        <Botao1 onClick={this.props.changePage}>Criar nova playlist</Botao1>
      </Container>
    );
  }
}

export default PlaylistPage;
