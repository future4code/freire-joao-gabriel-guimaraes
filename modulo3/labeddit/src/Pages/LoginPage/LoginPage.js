import axios from "axios";
import React from "react";
import {useNavigate} from 'react-router-dom'
import useForm from "../../Hooks/useform";
import{ goToSignUpPage, goToFeedPage} from '../../Route/Coordinator'
import { BASE_URL } from "../../Constants/url";

export const LoginPage = () => {
    const changePage = useNavigate()

    const {form, onChange, cleanFields} = useForm({email: "", password: ""})

    const loginFunction = (event) => {
        event.preventDefault();
        axios.post(`${BASE_URL}/users/login`, form)
        .then((res) => {
            console.log(res.data)
            goToFeedPage(changePage)
            cleanFields()
            window.localStorage.setItem('token', res.data.token)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }


    return (
        <div>
            <button onClick={() => goToSignUpPage(changePage)}>sign up</button>
            
            <form onSubmit={loginFunction}>
                <input type="email" name="email" onChange={onChange} placeholder = 'email' required value={form.email}/>
                <input type="password" name = 'password' onChange={onChange} placeholder = 'password' required value={form.password}/>
                <button>Login</button>
            </form>
        </div>
    )
}