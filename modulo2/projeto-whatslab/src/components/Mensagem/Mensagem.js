import React from 'react';
import styled from 'styled-components';

const Container1 = styled.div `
    display: flex;
    max-width: 600px;
    padding: 20px;
   
`


class Mensagem extends React.Component  {

  
  render(){
    
  return (
    <Container1>
        
      <p><strong>{this.props.nome}: </strong> {this.props.mensagem}</p>
        
    </Container1>
  );
  }
}

export default Mensagem;
