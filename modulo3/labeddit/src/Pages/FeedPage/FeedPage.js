import React from "react";
import {useNavigate} from 'react-router-dom'
import { goToPostPage, logout } from "../../Route/Coordinator";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
export const FeedPage = () => {
    useProtectedPage()
    const changeToPostPage = useNavigate()
    const changeToLoginPage = useNavigate()
    return (
        <div>
            <button onClick={() => goToPostPage(changeToPostPage)}>Ver post</button>
            <button onClick={() => logout(changeToLoginPage)}>Logout</button>
        </div>
    )
}