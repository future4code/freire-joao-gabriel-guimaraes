import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../global/context/useContext'
import { goToRepo } from '../routes/coordinator'

export const UserCard = (props) => {
    const navigate = useNavigate()
    const { user } = useContext(GlobalContext)
    const UserRepoPage = (url) => {
        goToRepo(navigate, user)
    }
    return(
        <div>
            <p>{props.data.name}</p>
            <p>@{props.data.login}</p>
            <p>{props.data.bio}</p>
            <p>Followers: {props.data.followers}</p>
            <p>Following: {props.data.following}</p>
            <p onClick = {() => UserRepoPage(props.data.repos_url)}>Repositório</p>
            <img src={props.data.avatar_url} alt="" />
        </div>
    )
}