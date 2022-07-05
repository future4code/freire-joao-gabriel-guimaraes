import React, {useState} from 'react'
import './App.css';
import axios from 'axios'
import styled from 'styled-components'

const Img = styled.img`
  width: 20vw;
`

function App() {
  
  const [profiles, setProfiles] = useState([])
  const [MatchedProfiles, setMatchedProfiles] = useState([])

  
  const getProfileToChoose = () => {
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person'
    axios.get(url)
    .then((res) => {
     setProfiles(res.data.profile)
     console.log(profiles)
    }).catch((error) => {
      console.log(error.message)
    })
  }
  const getMatches= () => {
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davas/matches'
    axios.get(url)
    .then((res) => {
     
     setMatchedProfiles(res.data)
     console.log(MatchedProfiles)
    }).catch((error) => {
      console.log(error.message)
    })
  }

  const clearProfile = () => {
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear'
    axios.put(url).then((res) => {
     
      console.log(res)
     }).catch((error) => {
       console.log(error.message)
     })
  }

  const choosePersonTrue = (id) => {
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person'
    const body = { 
      id: {id},
      choice: true
    }
    axios.post(url, body)
    .then((res) => {
      getProfileToChoose()
      console.log(res.data)
     }).catch((error) => {
       console.log(error.message)
     })
  }
  const choosePersonFalse = (id) => {
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person'
    const body = { id: {id},
    choice: false
    }
    axios.post(url, body)
    .then((res) => {
      console.log(id)
      console.log(res.data)
      getProfileToChoose()
     }).catch((error) => {
       console.log(error.message)
     })
  }
 
 
  
  return (
    <div className="App">
      <button onClick = {getProfileToChoose}>add pessoa</button>
      <button onClick = {clearProfile}>clear</button>
      <button onClick = {() => {choosePersonTrue(profiles.id)}}>s2</button>
      <button onClick = {() => {choosePersonFalse(profiles.id)}}>eca</button>
      <button onClick = {() => {getMatches()}}>matches</button>
      <p>{profiles.name}</p>
       <p>{profiles.age}</p>
      <p>{profiles.bio}</p>
       <p> {profiles.id}</p>
       <Img src={profiles.photo} alt="" /> 
       
    </div>
  );
}

export default App;
