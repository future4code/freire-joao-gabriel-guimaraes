import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import { UserCard } from "../../components/UserCard";


const TestePage = () => {
    const navigate = useNavigate();
    return(
        <>
        <h1> Pagina de teste </h1>
        <h1> Usando context globlal</h1>
        <button onClick={() => goToHomePage(navigate)}> goToHomePage </button>
        <UserCard/>
        </>
    )
}
export default TestePage;