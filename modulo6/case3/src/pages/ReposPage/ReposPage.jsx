import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { goToVoltar } from "../../routes/coordinator";
import { useRequestData } from "../../services";
import { BASE_URL } from "../../constants/BASE_URL";
import { GlobalContext } from "../../global/context/useContext";
import { UserReposCard } from "../../components/UserReposCard";

const ReposPage = () => {
    const navigate = useNavigate();
    const {user} = useContext(GlobalContext)
    const [data, isloading] = useRequestData(`${BASE_URL}/users/${user}/repos`)
    
    const userReposList = data && data?.map((repo) => {
        return <UserReposCard repo = {repo} key = {repo.id}/>
    })
    return(
        <>
        <h1> Pagina de teste </h1>
        <h1> Usando context globlal</h1>
        <button onClick={() => goToVoltar(navigate)}> voltar </button>
        {isloading && <p>carregando...</p>}
        {!isloading && userReposList}
    
        </>
    )
}
export default ReposPage;