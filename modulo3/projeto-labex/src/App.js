import { useRequestData } from './services/requests';
import React, { useState } from 'react'
import { BASE_URL } from './constants/urls';

function App() {
  const [name, isLoading, error] = useRequestData(`${BASE_URL}/trips`)
  // const [trip, setTrip] = useState(name.trips)
  
  const trips = name && name.trips.map((trip) => {
    return <p key={trip.id}>{trip.name} {trip.date} {trip.id}</p>
  })
  return (
    <div className="App">
      {isLoading && <p>carregando...</p>}
     {!isLoading && trips}
    </div>
  );
}

export default App;
