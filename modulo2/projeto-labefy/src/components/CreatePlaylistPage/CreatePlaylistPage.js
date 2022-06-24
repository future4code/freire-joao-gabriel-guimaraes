import axios from "axios";
import React from "react";

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
      <div>
        <input
          type="text"
          value={this.state.playlistName}
          onChange={this.onChangePlaylistName}
        />

        <button onClick={this.createPlaylist}>criar playlist</button>
        <button onClick={this.props.changePage}>Ver todas playlists</button>
      </div>
    );
  }
}

export default CreatePlaylistPage;
