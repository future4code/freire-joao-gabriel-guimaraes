import React, { useContext } from 'react'
import { GlobalContext } from '../global/context/useContext'

export const UserCard = (props) => {
    const { data } = useContext(GlobalContext)
    console.log(data)
    const testFunc = (url) => {
        alert(url)
    }
    return(
        <div>
            <p>{data.name}</p>
            <p>@{data.login}</p>
            <p>Followers: {data.followers}</p>
            <p>Following: {data.following}</p>
            <p onClick = {() => testFunc(data.repos_url)}>Repositório</p>
            <img src={data.avatar_url} alt="" />
        </div>
    )
}