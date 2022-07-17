import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import astronauta from '../../img/astronauta.jpg'
import Button from "@mui/material/Button";

const Div = styled.div `
    width: 100vw;
    height: 100vh;
    background: url(${astronauta}) no-repeat center fixed;
    background-size: cover;
    display: grid;
    justify-content: center;
    align-items: center;
`
const Div1 = styled.div `
    display: flex;
    width: 350px;
    justify-content: space-between;
`

function HomePage() {
    const navigate = useNavigate()
    const goToListTrip = () => {
        navigate('/trips/list')
    }
    const goToAdminPage = () => {
        const token = window.localStorage.getItem('token')
    if(token === null) {
      navigate('/login')
    }
    else {
        navigate('/admin/trips/list')
    }
    }
  return (
    <Div >
        
        <Div1>
        
        <Button variant="contained" size="large" margin = 'normal' color="secondary" onClick = {goToListTrip} >Viagens</Button>
        <Button variant="contained" size="large" margin = 'normal' color="secondary"onClick = {goToAdminPage} >Fazer Login</Button>
        
    </Div1>    
    </Div>
    
  );
}

export default HomePage;
