
import React from 'react';
import styled from 'styled-components';
import Etapa1 from './pages/Etapa1'
import Etapa2 from './pages/Etapa2'
import Etapa3 from './pages/Etapa3'
import EtapaFinal from './pages/EtapaFinal'

const Botao = styled.button `
  display: flex;
   margin: 3vh auto;
`



class App extends React.Component {
  state = {
    pagina: 1,
  }
  renderizar= () => {
    
    switch (this.state.pagina) {
      case 1:
         return <Etapa1 /> 
        
        case 2:
         return <Etapa2 />
        
         case 3:
          return <Etapa3 />
        case 4:
          return <EtapaFinal />
        default:
          break;
      
    }
  }
    mudaPagina = () => {
    
    {return this.setState({pagina: this.state.pagina + 1})}

  }


  render(){
    
    return (
      <div>
          <div>{this.renderizar()}</div>
      {this.state.pagina < 4 ? (<Botao onClick={this.mudaPagina}>Próxima etapa</Botao>) : ""}
      </div>
    );
  }
 
}

export default App;
