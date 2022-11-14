import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext({})

export const GlobalProvider = ({children}) => {
    const [userList, setUserList] = useState([]);
    const [user, setUser] = useState([]);
    return (
        <GlobalContext.Provider value={{userList, setUserList, user, setUser}}>{children}</GlobalContext.Provider>
    )
} 