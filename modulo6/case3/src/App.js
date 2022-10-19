import React from "react";
import { Router } from "./routes/Routes"
import {GlobalProvider} from "../src/global/context/useContext.js"

function App() {
  return (
    <>
    <GlobalProvider>
      <Router/>
    </GlobalProvider>
    </>
  );
}
export default App;
