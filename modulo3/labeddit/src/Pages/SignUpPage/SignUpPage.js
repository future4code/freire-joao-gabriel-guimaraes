import React from "react";
import {useNavigate} from 'react-router-dom'
import{goToFeedPage, goToLoginPage} from '../../Route/Coordinator'
import useForm from '../../Hooks/useform'
import axios from 'axios'
import { BASE_URL } from "../../Constants/url";
export const SignUpPage = () => {
    const changePage = useNavigate()
    const {form, onChange, cleanFields} = useForm({username: "", email: "", password: ""})

    const signUp = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}/users/signup`, form)
        .then((res) => {
            console.log(res.data)
            goToFeedPage(changePage)
            window.localStorage.setItem('token', res.data.token)
            cleanFields()
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
    return (
        <div>
            <button onClick = {() => goToLoginPage(changePage)}>entrar</button>
            <form onSubmit={signUp}>
                <input type="text" onChange = {onChange} placeholder = 'username' value={form.username} required name = 'username' />
                <input type="email" onChange = {onChange} placeholder = 'email' value={form.email} required name = 'email' />
                <input type="password" onChange = {onChange} placeholder = 'password' value={form.password} required name = 'password' />
                <button>Cadastrar</button>
            </form>
           
        </div>
    )
}