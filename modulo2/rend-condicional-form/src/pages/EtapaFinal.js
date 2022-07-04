import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
`

class Etapa1 extends React.Component {
  
  render(){
    return (
      <Container>
        <h2>O FORMULÁRIO ACABOU </h2>
        <p>Muito obrigado por participar! Entraremos em contato</p>

       
      </Container>
    );
  }
 
}

export default Etapa1;
