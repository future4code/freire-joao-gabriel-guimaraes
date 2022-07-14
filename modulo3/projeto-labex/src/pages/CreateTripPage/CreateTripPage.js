// import { useRequestData } from './services/requests';
import React from 'react'
// import { BASE_URL } from './constants/urls';
import { useNavigate } from 'react-router-dom'

function CreateTripPage() {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
  return (
    <div className="App">
     oi
     <button onClick = {goBack}>voltar</button>
    </div>
  );
}

export default CreateTripPage;
