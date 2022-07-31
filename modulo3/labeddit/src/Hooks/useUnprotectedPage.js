import React from "react";
import { useLayoutEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { goToLoginPage } from "../Route/Coordinator";

export const useUnprotectedPage = () => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token === null) {
            goToLoginPage(navigate)
        }
    }, [navigate])
}