import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Matches from './components/Matches/Matches'

const Img = styled.img`
  width: 50%;
`;

const Div = styled.div`
  width: 398px;
  height: 598px;
  margin: auto;
  border: 2px solid black;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

const Button = styled.button`
  margin-top: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  &:hover {
    background-color: darkcyan;
  }
`;
function App() {
  const [profiles, setProfiles] = useState([]);
  const [matchedProfiles, setMatchedProfiles] = useState([]);

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaoGabriel/person";
    axios
      .get(url)
      .then((res) => {
        setProfiles(res.data.profile);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getMatches = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaoGabriel/matches";
    axios
      .get(url)
      .then((res) => {
        setMatchedProfiles(res.data.matches);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const clearProfile = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaoGabriel/clear";
    axios
      .put(url)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const choosePersonTrue = (id) => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joaoGabriel/choose-person";
    const body = {
      id: `${id}`,
      choice: true
    };
    axios
      .post(url, body)
      .then((res) => {
        getProfileToChoose();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const choosePersonFalse = (id) => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao/choose-person";
    const body = { id: `${id}`, choice: false };
    axios
      .post(url, body)
      .then((res) => {
        getProfileToChoose();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="App">
      {/* <button onClick = {getProfileToChoose}>add pessoa</button> */}
      <Div>
        <p>AstroMatch</p>
        <button
          onClick={() => {
            getMatches();
          }}
        >
          matches
        </button>
        <hr />
        <p>
          {profiles.name}, {profiles.age}
        </p>
        <p>{profiles.bio}</p>
        <Img src={profiles.photo} alt="" /> <br />
        <Button
          onClick={() => {
            choosePersonFalse(profiles.id);
          }}
        >
          eca
        </Button>
        <Button
          onClick={() => {
            choosePersonTrue(profiles.id);
          }}
        >
          s2
        </Button>
      </Div>

      <Matches matchedProfiles = {matchedProfiles}/>
      <button onClick={clearProfile}>clear</button>
    </div>
  );
}

export default App;
