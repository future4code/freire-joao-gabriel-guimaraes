// import { useRequestData } from './services/requests';
import React from 'react'
// import { BASE_URL } from './constants/urls';
import { useNavigate } from 'react-router-dom'

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
    <div className="App">
        <button onClick = {goToListTrip} >Lista de viagens</button>
        <button onClick = {goToAdminPage} >Fazer Login</button>
    </div>
  );
}

export default HomePage;
