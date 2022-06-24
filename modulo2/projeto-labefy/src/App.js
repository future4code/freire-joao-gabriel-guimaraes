import './App.css';
import React from 'react';
import DetailsPage from './components/DetailsPage/DetailsPage'
import CreatePlaylistPage from './components/CreatePlaylistPage/CreatePlaylistPage'
import PlaylistPage from './components/PlaylistsPage/PlaylistPage'



class App extends React.Component {
  state = {
    currentPage: 'list'
  }

  changePage = (pageName) => {
      this.setState({currentPage: pageName})
  }

  render(){
    switch (this.state.currentPage) {
      case 'create':
        return <CreatePlaylistPage changePage = {() => {this.changePage('list')}}/>
      case 'list':
        return <PlaylistPage changePage = {() => {this.changePage('create')}}/>
      case 'details':
        return <DetailsPage changePage = {() => {this.changePage('list')}}/>
      default: return <CreatePlaylistPage changePage = {() => {this.changePage('create')}}/>
        break;
    }
    return (
      <div className="App">
        
      </div>
    );
  }
 
}

export default App;
