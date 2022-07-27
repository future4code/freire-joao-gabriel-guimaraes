import React from "react";
import {useNavigate, useParams} from 'react-router-dom'
import { BASE_URL } from "../../Constants/url";
import { goToFeedPage, goToLoginPage } from "../../Route/Coordinator";
import { useRequestData } from "../../Services/requests";
import useForm from "../../Hooks/useform";
import {createComment} from '../../Services/requests'
import PostComments from "../../Components/PostComments/PostComments";
export const PostPage = () => {
    const changeToFeedPage = useNavigate()
    const id = useParams().id
    const [comments, isLoading, error, getData] = useRequestData(`${BASE_URL}/posts/${id}/comments`)
    const {form, onChange, cleanFields} = useForm({body: ''})

    const listComments = comments && comments.map((post) => {
        return (<PostComments key = {post.id} post = {post} getData = {getData} />)
    })
    
    const postComment = (event) => {
        event.preventDefault()
        const url = `${BASE_URL}/posts/${id}/comments`
        createComment(url, form, getData, cleanFields)

    }
    return (
        <div>
            <button onClick={() => goToFeedPage(changeToFeedPage)}>Voltar para Feed</button>
            <button onClick={() => goToLoginPage(changeToFeedPage)}>Logout</button>
            <form onSubmit={postComment}>
                <input type="text" onChange={onChange} value = {form.body} name = 'body' placeholder="escreva um comentário..." required />
                <button>comentar</button>
            </form>
            {isLoading && <p>carregando...</p>}
            {!isLoading && listComments}
            
        </div>
    )
}