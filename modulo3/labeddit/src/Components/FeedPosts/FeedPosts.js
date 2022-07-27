import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { BASE_URL } from "../../Constants/url";
import { goToPostPage } from "../../Route/Coordinator";
import { createPostVote, changePostVote } from "../../Services/requests";
export default function FeedPosts(props) {
    
    const changePage = useNavigate()
    let like = 1
    let dislike = -1
    const goToPostComments = (id) => {
        goToPostPage(changePage, id)
        
    }
    const postVote = (curtida) => {
        const url = `${BASE_URL}/posts/${props.post.id}/votes`
        createPostVote(url, curtida, props.getData)
    }
    const cPostVote = (curtida) => {
        const url = `${BASE_URL}/posts/${props.post.id}/votes`
        changePostVote(url, curtida, props.getData)
    }
    return(
        <div>
            <p>enviado por: {props.post.username}</p>
            <p>{props.post.body}</p>
            {props.post.voteSum === null ? <p>n de votos: 0</p> : <p>n de votos: {props.post.voteSum}</p>}
            {props.post.commentCount === null ? <p>n de comentarios: 0</p> : <p>n de comentarios: {props.post.commentCount}</p>}
            <button onClick={() => goToPostComments(props.post.id)}>comentarios</button>
            {props.post.userVote === 1 ? <button onClick={() => cPostVote(like)}>like colorido</button> : <button onClick={() => postVote(like)}>like</button> }
            {props.post.userVote === -1? <button onClick={() => cPostVote(dislike)}>dislike colorido</button> : <button onClick={() => postVote(dislike)}>dislike</button>}

        </div>
    )
}