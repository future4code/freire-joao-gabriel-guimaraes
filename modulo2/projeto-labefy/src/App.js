import "./App.css";
import React from "react";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import CreatePlaylistPage from "./components/CreatePlaylistPage/CreatePlaylistPage";
import PlaylistPage from "./components/PlaylistsPage/PlaylistPage";
import HomePage from './components/HomePage/HomePage'

class App extends React.Component {
  state = {
    currentPage: "home",
    clickedPlaylistId: "",
    clickedPlaylistName: "",
  };

  changePage = (pageName) => {
    this.setState({ currentPage: pageName });
  };

  changeToDetails = (id, name) => {
    this.setState({
      currentPage: "details",
      clickedPlaylistId: id,
      clickedPlaylistName: name,
    });
  };

  render() {
    switch (this.state.currentPage) {
      case "create":
        return (
          <CreatePlaylistPage
            changePage={() => {
              this.changePage("list");
            }}
          />
        );
      case "list":
        return (
          <PlaylistPage
            changePage={() => {
              this.changePage("create");
            }}
            changeToDetails={this.changeToDetails}
          />
        );
      case "details":
        return (
          <DetailsPage
            changePage={() => {
              this.changePage("list");
            }}
            id={this.state.clickedPlaylistId}
            name={this.state.clickedPlaylistName}
          />
        );
        case "home":
        return (
          <HomePage
            changePage={() => {
              this.changePage("create");
            }}
            id={this.state.clickedPlaylistId}
            name={this.state.clickedPlaylistName}
          />
        );
      default:
        return (
          <CreatePlaylistPage
            changePage={() => {
              this.changePage("create");
            }}
          />
        );
        break;
    }
    return <div></div>;
  }
}

export default App;
