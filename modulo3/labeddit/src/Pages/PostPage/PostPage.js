import React from "react";
import {useNavigate} from 'react-router-dom'
import { goToFeedPage, goToLoginPage } from "../../Route/Coordinator";
export const PostPage = () => {
    const changeToFeedPage = useNavigate()
    return (
        <div>
            <button onClick={() => goToFeedPage(changeToFeedPage)}>Voltar para Feed</button>
            <button onClick={() => goToLoginPage(changeToFeedPage)}>Logout</button>
        </div>
    )
}