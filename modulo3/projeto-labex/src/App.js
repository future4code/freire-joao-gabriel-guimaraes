import { useRequestData } from './services/requests';
import React, { useState } from 'react'
import { BASE_URL } from './constants/urls';
import  {Rotas} from "./Routes/Rotas";

function App() {
  
  return (
    <div className="App">
     
     <Rotas/>
    </div>
  );
}

export default App;
