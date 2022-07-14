import { useRequestData } from '../../services/requests';
import { BASE_URL } from '../../constants/urls';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import {useDecideData} from '../../services/requests'
import {CandidateCard} from '../../components/candidateCard/CandidateCard'

function TripDetailsPage() {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    const pathParams = useParams()
    const [name, isLoading, error, getData] = useRequestData(`${BASE_URL}/trip/${pathParams.id}`)
   
    const candidates = name && name.trip && name.trip.candidates.map((person) => {
        return ( <CandidateCard candidate = {person} tripId = {pathParams.id} key = {person.id} getData = {getData}/>)
    })
    const approvedCandidates = name && name.trip && name.trip.approved.map((person) => {
        return ( <li key={person.id}> {person.name}</li>)
    })
    
  return (
    <div className="App">
        
         {isLoading && <p>carregando...</p>}
       
      {!isLoading && name && name.trip && <h1>{name.trip.name}</h1>}
            {!isLoading && name && name.trip && <div>
                <p><b>Nome:</b> {name.trip.name}</p>
                <p><b>Descrição:</b> {name.trip.description}</p>
                <p><b>Planeta:</b> {name.trip.planet}</p>
                <p><b>Duração:</b> {name.trip.durationInDays}</p>
                <p><b>Data:</b> {name.trip.date}</p>
            </div>}
            <div><h3>Candidatos Pendentes:</h3></div>
            {candidates && candidates.length > 0 ? candidates : <p>Não há candidatos pendentes.</p> }
            <div><h3>Candidatos Aprovados:</h3></div>
            {approvedCandidates && approvedCandidates.length > 0 ? approvedCandidates : <p>Não há candidatos aprovados.</p> }
     <button onClick = {goBack}>voltar</button>
    </div>
  );
}

export default TripDetailsPage