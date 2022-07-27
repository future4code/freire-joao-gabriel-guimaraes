import React, { useState } from "react";
import { BASE_URL } from "../../Constants/url";
import { createPostVote, changePostVote } from "../../Services/requests";
export default function PostComments(props) {
     let like = 1
    let dislike = -1
    const postVote = (curtida) => {
        const url = `${BASE_URL}/comments/${props.post.id}/votes`
        createPostVote(url, curtida, props.getData)
    }
    const cPostVote = (curtida) => {
        const url = `${BASE_URL}/comments/${props.post.id}/votes`
        changePostVote(url, curtida, props.getData)
    }
    return(
        <div>
            <p>enviado em: {props.post.createdAt}</p>
            <p>{props.post.body}</p>
            {props.post.voteSum === null ? <p>n de votos: 0</p> : <p>n de votos: {props.post.voteSum}</p>}
            {props.post.userVote === 1 ? <button onClick={() => cPostVote(like)}>like colorido</button> : <button onClick={() => postVote(like)}>like</button> }
            {props.post.userVote === -1? <button onClick={() => cPostVote(dislike)}>dislike colorido</button> : <button onClick={() => postVote(dislike)}>dislike</button>}

        </div>
    )
}