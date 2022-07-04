import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  background-color: black;
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  color: #34b3f1;
  font-size: 800%;
`;

const H3 = styled.h3`
  color: #34b3f1;
  margin-top: -40px;
  margin-bottom: 20px;
`;

const Botao = styled.button`
  background-color: #eeeeee;
  color: black;
  width: 10%;
  height: 5%;
  border-radius: 15px;
  font-size: larger;
  &:hover {
    box-shadow: 0 5px 5px 0 rgba(238, 238, 238, 0.267),
      0 5px 5px 0 rgba(238, 238, 238, 0.267);
  }
`;

class HomePage extends React.Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <H1>LABEFY</H1>
        <H3>criar playlists nunca foi tão fácil!</H3>

        <Botao onClick={this.props.changePage}>começar</Botao>
      </Container>
    );
  }
}

export default HomePage;
