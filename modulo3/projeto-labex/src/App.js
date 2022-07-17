import React from "react";
import { Rotas } from "./Routes/Rotas";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        
    }    
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 500px;
    }

    

`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Rotas />
    </div>
  );
}

export default App;
