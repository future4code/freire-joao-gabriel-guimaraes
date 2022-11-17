import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import { UserCard } from "../../components/UserCard";
import { useRequestData } from "../../services";
import { BASE_URL } from "../../constants/BASE_URL";
import { GlobalContext } from "../../global/context/useContext";


const UserPage = () => {
    const navigate = useNavigate();
    const {user} = useContext(GlobalContext)
    const [data, isloading] = useRequestData(`${BASE_URL}/users/${user}`)
    return(
        <>
        <h1> Pagina de teste </h1>
        <h1> Usando context globlal</h1>
        <button onClick={() => goToHomePage(navigate)}> goToHomePage </button>
        {isloading && <p>carregando...</p>}
        {!isloading && <UserCard data = {data}/>}
        </>
    )
}
export default UserPage;