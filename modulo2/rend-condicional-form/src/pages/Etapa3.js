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
        <h2>ETAPA   3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <p>5. Por que você não terminou um curso de graduação?</p>
        <input type="text" />
        <p>6. Você fez algum curso complementar?</p>
        <select name="select" id="">
        <option value="valor1">Curso técnico</option>
        <option value="valor1">Curso de Inglês</option>
        </select>
       
      </Container>
    );
  }
 
}

export default Etapa1;
