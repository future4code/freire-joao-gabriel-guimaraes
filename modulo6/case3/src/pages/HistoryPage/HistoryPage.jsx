import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../global/context/useContext";
import { goToHomePage, goToTeste } from "../../routes/coordinator";

const HistoryPage = () => {
    const navigate = useNavigate();
    const { userList, 
            setUser } = useContext(GlobalContext)
 
    const alertNow = (user1) => {
        setUser(user1)
        goToTeste(navigate, user1)
    }

    const userHistory = userList?.reverse().map((user) => {
        return <li 
        key = {user} 
        onClick = {() => {alertNow(user)}}
        >{user}</li>
    })
    return(
        <>
        <h1> Histórico de pesquisas </h1>
        <ul>{userHistory}</ul>
        <button onClick={() => goToHomePage(navigate)}> goToHomePage </button>
        </>
    )
}
export default HistoryPage;