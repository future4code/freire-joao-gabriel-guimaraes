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
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Botao1 = styled.button`
  background-color: #eeeeee;
  color: black;
  width: 10%;
  height: 3%;
  border-radius: 15px;
  margin-top: 150px;

  &:hover {
    box-shadow: 0 5px 5px 0 rgba(238, 238, 238, 0.267),
      0 5px 5px 0 rgba(238, 238, 238, 0.267);
  }
`;

const Conteudo = styled.div`
  display: flex;
  flex-direction: row;
  width: 40vw;
  justify-content: space-between;
  margin-bottom: 5px;
  border-radius: 5px;
  padding-left: 5px;
  align-items: center;
`;
const Botao = styled.button`
  background-color: black;
  color: red;
  &:hover {
    cursor: pointer;
  }
`;
const Audio = styled.audio`
  width: 12vw;
  height: 3vh;
`;

const Input = styled.input`
  margin-right: 12px;
  padding-left: 8px;
  border: 2px solid black;
`;
const Botao2 = styled.button`
  background-color: #eeeeee;
  color: black;
  width: 110%;
  height: 100%;
  border-radius: 7px;
  /* margin-top: 150px; */

  &:hover {
    box-shadow: 0 5px 5px 0 rgba(238, 238, 238, 0.267),
      0 5px 5px 0 rgba(238, 238, 238, 0.267);
  }
`;
const Botao3 = styled.button`
  background-color: #eeeeee;
  color: black;
  width: 19%;
  border-radius: 15px;

  &:hover {
    box-shadow: 0 5px 5px 0 rgba(238, 238, 238, 0.267),
      0 5px 5px 0 rgba(238, 238, 238, 0.267);
  }
`;
const Div = styled.div`
  width: 110%;
`;

class DetailsPage extends React.Component {
  state = {
    addMusic: false,
    name: "",
    artist: "",
    url: "",
    trackList: [],
  };
  componentDidMount() {
    this.getPlaylistTracks();
  }

  addMusic = () => {
    this.setState({ addMusic: !this.state.addMusic });
  };

  playMusic = () => {
    this.setState({ playMusic: !this.state.playMusic });
  };
  addTrackToPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`;
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };
    axios
      .post(url, body, {
        headers: { authorization: "joaoGabriel-guimaraes-labenu" },
      })
      .then((response) => {
        this.setState({ name: "", artist: "", url: "" });
        alert(
          `A música ${this.state.name} do artista/banda ${this.state.artist} foi adicionada a sua playlist ${this.props.name}!`
        );
        this.getPlaylistTracks();
        this.addMusic();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  getPlaylistTracks = (event) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`;

    axios
      .get(url, {
        headers: { authorization: "joaoGabriel-guimaraes-labenu" },
      })
      .then((response) => {
        this.setState({ trackList: response.data.result.tracks });
        console.log(response.data.result.tracks);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  removeTrackFromPlaylist = (id, name) => {
    if (window.confirm(`tem certeza que deseja deletar a música ${name}?`)) {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${id}`;
      axios
        .delete(url, {
          headers: { authorization: "joaoGabriel-guimaraes-labenu" },
        })
        .then(() => {
          this.getPlaylistTracks();
          alert(`Música ${name} deletada com sucesso!`);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };
  onChangeName = (ev) => {
    this.setState({ name: ev.target.value });
  };
  onChangeArtist = (ev) => {
    this.setState({ artist: ev.target.value });
  };
  onChangeUrl = (ev) => {
    this.setState({ url: ev.target.value });
  };
  render() {
    const tracks = this.state.trackList.map((track) => {
      return (
        <div>
          <Conteudo>
            {track.name}{" "}
            <Botao
              onClick={() => {
                this.removeTrackFromPlaylist(track.id, track.name);
              }}
            >
              X
            </Botao>
          </Conteudo>
          <Audio src={`${track.url}`} controls />
        </div>
      );
    });
    const showAddMusic = !this.state.addMusic ? (
      <Botao2 onClick={this.addMusic}>add musica</Botao2>
    ) : (
      <Div>
        <Input
          type="text"
          onChange={this.onChangeName}
          value={this.state.name}
          placeholder="nome"
        />
        <Input
          type="text"
          onChange={this.onChangeArtist}
          value={this.state.artist}
          placeholder="artista"
        />
        <Input
          type="text"
          onChange={this.onChangeUrl}
          value={this.state.url}
          placeholder="link da música"
        />

        <Botao3 onClick={this.addTrackToPlaylist}>adicionar música</Botao3>
      </Div>
    );

    return (
      <Container>
        <GlobalStyle />
        <h2> Playlist: {this.props.name}</h2>

        <p>{showAddMusic}</p>
        <p>{tracks}</p>

        <Botao1 onClick={this.props.changePage}>
          voltar para lista de playlist
        </Botao1>
      </Container>
    );
  }
}

export default DetailsPage;
