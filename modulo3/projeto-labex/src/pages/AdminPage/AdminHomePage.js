import { useRequestData } from '../../services/requests';
import { BASE_URL } from '../../constants/urls';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import  useProtectedPage from '../../hooks/useProtectedPage'

function AdminHomePage() {
  useProtectedPage()

  const navigate = useNavigate()
  const goToDetaisPage = (id) => {
    navigate(`/admin/trips/${id}`)
  }
  const [name, isLoading, error] = useRequestData(`${BASE_URL}/trips`)
  const trips = name && name.trips.map((trip) => {
    return <p key={trip.id} onClick = {() => {goToDetaisPage(trip.id)}} >{trip.name} </p>
  })
  
  const goToHomePage = () => {
    navigate('/')
  }
  const goToCreateTrip = () => {
    navigate('/admin/trips/create')
  }
  const goToLoginPage = () => {
    navigate('/login')
    localStorage.removeItem('token')
  }

  return (
    <div className="App">
     {isLoading && <p>carregando...</p>}
       {!isLoading && trips}
       
     <button onClick = {goToHomePage}>Voltar</button>
     <button onClick = {goToCreateTrip}>Criar Viagem</button>
     <button onClick = {goToLoginPage}>Logout</button>
    </div>
  );
}

export default AdminHomePage;
