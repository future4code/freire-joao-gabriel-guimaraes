import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {
    const [nome, setNome] = useState([]);
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    return (
        <GlobalContext.Provider value={{nome, setNome, data, setData, user, setUser}}>{children}</GlobalContext.Provider>
    )
} 