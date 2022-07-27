import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { goToPostPage, logout } from "../../Route/Coordinator";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { createPost, useRequestData } from "../../Services/requests";
import { BASE_URL } from "../../Constants/url";
import FeedPosts from '../../Components/FeedPosts/FeedPosts'
import useForm from '../../Hooks/useform'
import Pagination from "../../Pagination/Pagination";
export const FeedPage = () => {
    useProtectedPage()
    const changeToLoginPage = useNavigate()
    const {form, onChange, cleanFields} = useForm({title: '', body: ''})
    const [page, setPage] = useState(0);
    const itensPerPage = 5;
    const [posts, isLoading, error, getData] =  useRequestData(`${BASE_URL}/posts/?page=${page*itensPerPage}&size=${itensPerPage}`)
    const onLeftClick = () => {
        if (page > 0) {
            setPage(page-1)
        }
    }
    const onRightClick = () => {
        if (page + 1 < 50) {
          setPage(page + 1);
        }
      };
    const listPost = posts && posts.map((post) => {
        return <FeedPosts post = {post} key = {post.id} getData = {getData}/>
    })

    const createdPost = (event) => {
        event.preventDefault()
        const url = `${BASE_URL}/posts`
        createPost(url, form, getData, cleanFields)
    }


    return (
        <div>
            <button onClick={() => logout(changeToLoginPage)}>Logout</button>
            <form onSubmit={createdPost}>
                <input type="text" onChange = {onChange} name = 'title' placeholder="título" value = {form.title} required />
                <input type="text" onChange = {onChange} name = 'body' placeholder="Escreva seu Post..." value = {form.body} required />
                <button>Postar</button>
            </form>
            {isLoading && <p>carregando...</p>}
            {!isLoading && listPost}
            <Pagination
          page={page + 1}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
        />
        </div>
    )
}