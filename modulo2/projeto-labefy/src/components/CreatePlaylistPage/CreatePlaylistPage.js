import axios from "axios";
import React from "react";
import { Container } from "./styled";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
    margin: 0;
    padding: 0;
  }
`;

const Input = styled.input`
  border-radius: 10px;
  width: 300px;
  height: 40px;
  padding-left: 12px;
  margin-right: 12px;
`;
const Container1 = styled.div`
  display: flex;

  flex-direction: row; ;
`;
const Botao = styled.button`
  background-color: #34b3f1;
  color: white;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 5px 5px 0 rgba(238, 238, 238, 0.267),
      0 5px 5px 0 rgba(238, 238, 238, 0.267);
  }
`;
const Botao1 = styled.button`
  background-color: #34b3f1;
  color: white;
  border-radius: 10px;
  margin-top: 200px;
  width: 200px;
  height: 40px;
`;

class CreatePlaylistPage extends React.Component {
  state = {
    playlistName: "",
  };

  createPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = { name: this.state.playlistName };
    axios
      .post(url, body, {
        headers: { authorization: "joaoGabriel-guimaraes-labenu" },
      })
      .then((response) => {
        this.setState({ playlistName: "" });
        alert(`Playlist ${this.state.playlistName} foi criada!`);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  onChangePlaylistName = (event) => {
    this.setState({ playlistName: event.target.value });
  };
  render() {
    return (
      <Container>
        <GlobalStyle />
        <p>Primeiro, digite o nome da sua playlist: </p>
        <Container1>
          <Input
            type="text"
            value={this.state.playlistName}
            onChange={this.onChangePlaylistName}
            placeholder="nome da playlist"
          />

          <Botao onClick={this.createPlaylist}>criar playlist</Botao>
        </Container1>
        <Botao1 onClick={this.props.changePage}>Ver todas playlists</Botao1>
      </Container>
    );
  }
}

export default CreatePlaylistPage;
