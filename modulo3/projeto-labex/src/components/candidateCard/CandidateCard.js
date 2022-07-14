import React from  'react'
import { BASE_URL } from '../../constants/urls'
import {decideData} from '../../services/requests'
export function CandidateCard(props) {
    const {name, profession, age, country, applicationText, id} = props.candidate
    // const [candidate, isLoading1, error1] = decideData(`${BASE_URL}/trips/${props.tripId}/candidates/${id}/decide`)
    const approved = (decision) => {
        const url = `${BASE_URL}/trips/${props.tripId}/candidates/${id}/decide`
        decideData(url, decision, props.getData)
    }
    return (
        <div>
            <p><b>Nome:</b> {name}</p>
                 <p><b>Profissão:</b> {profession}</p>
                 <p><b>idade:</b> {age}</p>
                 <p><b>País:</b> {country}</p>
                 <p><b>Texto de candidatura:</b> {applicationText}</p>
                 <button onClick={() => {approved(true)}}>Aprovar</button>
                 <button onClick={() => {approved(false)}}>Reprovar</button>
        </div>
    )
}