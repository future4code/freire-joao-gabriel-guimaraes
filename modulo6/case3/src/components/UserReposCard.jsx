import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../global/context/useContext'
import { goToRepo } from '../routes/coordinator'

export const UserReposCard = (props) => {
    const navigate = useNavigate()
    const { user } = useContext(GlobalContext)
    
    const UserRepoPage = (url) => {
        goToRepo(navigate, user)
    }
    return(
        <div>
            <a rel="stylesheet" href={props.repo.html_url} target = '_blank'>{props.repo.name} </a>
            <p>@{props.repo.owner.login}</p>
            <p>{props.repo.description}</p>
            <p>{props.repo.stargazers_count}</p>
            
            {/* <img src={data.avatar_url} alt="" /> */}
        </div>
    )
}