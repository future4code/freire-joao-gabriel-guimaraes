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
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <p>1. Qual seu nome?</p>
        <form>
        <input type="text" required/></form>
        <p>2. Qual sua idade?</p>
        <input type="text" required="required"/>
        <p>3. Qual seu email?</p>
        <input type="text" required="required"/>
        <p>4. Qual a sua escolaridade?</p>
        <select name="select" id="" required="required">
        <option value="valor1">Ensino Médio incompleto</option>
        <option value="valor1">Ensino Médio completo</option>
        <option value="valor1">Ensino Superior incompleto</option>
        <option value="valor1">Ensino Superior completo</option>
        </select>
        
       
      </Container>
    );
  }
 
}

export default Etapa1;
