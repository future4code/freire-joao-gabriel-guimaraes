import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
`

class Etapa2 extends React.Component {
  render(){
    return (
      <Container>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <p>5. Qual o curso?</p>
        <input type="text" />
        <p>6. Qual unidade de ensino?</p>
        <input type="text" />
      </Container>
    );
  }
 
}

export default Etapa2;
