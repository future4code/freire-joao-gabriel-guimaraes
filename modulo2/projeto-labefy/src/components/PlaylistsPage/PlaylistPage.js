import axios from "axios";
import React from "react";

class PlaylistPage extends React.Component {
state ={
    playlistList: []
}
componentDidMount (){
    this.getAllPlaylist()
}
    getAllPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        axios.get(url, 
            {headers: { authorization: "joaoGabriel-guimaraes-labenu" 
        }}).then((response) => {
             this.setState({ playlistList: response.data.result.list});
            
        }).catch()
    }
    render() {
        const list = this.state.playlistList.map((list) => {
            return <li key = {list.name}>{list.name}</li>
        })
        return(
            <div>
                {{list} ? (<div><ul> {list}</ul></div>) : (<p>carregando...</p>)}
                {/* <ul>{list}</ul> */}
                <button onClick={this.props.changePage}>Criar nova playlist</button>
            </div>
        )
    }
}

export default PlaylistPage