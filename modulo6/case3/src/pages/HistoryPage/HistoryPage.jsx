import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import { GlobalContext } from "../../global/context/useContext";
import { goToHomePage, goToTeste } from "../../routes/coordinator";
import { useRequestData } from "../../services";

const HistoryPage = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(GlobalContext)
    const { nome } = useContext(GlobalContext)
    const { data } = useContext(GlobalContext)
    const { setNome } = useContext(GlobalContext)
    const [data1, isloading, getData] = useRequestData(`${BASE_URL}/users/${user}`)
 
    const alertNow = (user1) => {
        setUser(user1)
        goToTeste(navigate, user1)
    }
    console.log(user)
    console.log(data)
    const userHistory = nome?.map((user) => {
        return <li 
        key = {user.index} 
        onClick = {() => {alertNow(user)}}
        onChange= {e => setUser(e.target.value)}
        value = {user}>{user}</li>
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