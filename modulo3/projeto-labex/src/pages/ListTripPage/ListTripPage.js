import { useRequestData } from '../../services/requests';
import React from 'react'
import { BASE_URL } from '../../constants/urls';
import { useNavigate } from 'react-router-dom'

function ListTripPage() {
    const navigate = useNavigate()
    const goToApplicationPage = () => {
        navigate('/trips/application')
    }
    const goBack = () => {
        navigate(-1)
    }
    const [name, isLoading, error] = useRequestData(`${BASE_URL}/trips`)
    
    const trips = name && name.trips.map((trip) => {
      return <p key={trip.id}>{trip.name} {trip.date} {trip.id}</p>
    })
    return (
      <div className="App">
        {isLoading && <p>carregando...</p>}
       {!isLoading && trips}
       <button onClick={goToApplicationPage}>inscrever-se</button>
       <button onClick = {goBack}>voltar</button>
      </div>
    );
}

export default ListTripPage;
