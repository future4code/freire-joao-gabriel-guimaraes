import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Matches from "./pages/Matches/Matches";
import ChoosePerson from "./pages/ChoosePerson/ChoosePerson";
import { urlApi } from "./constants/apiUrl";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [matchedProfiles, setMatchedProfiles] = useState([]);
  const [pages, setPages] = useState("choosePerson");

  const getProfileToChoose = () => {
    const url = `${urlApi}/Joao/person`;
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
    const url = `${urlApi}/JoaoGabriel/matches`;
    axios
      .get(url)
      .then((res) => {
        setMatchedProfiles(res.data.matches);
        setPages("Matched");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const clearProfile = () => {
    const url = `${urlApi}/JoaoGabriel/clear`;
    axios
      .put(url)
      .then((res) => {
        alert("matches e perfis visto limpados com sucesso!");
        getProfileToChoose();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const choosePersonFalse = (id) => {
    setProfiles("");
    const url = `${urlApi}/JoaoGabriel/choose-person`;
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

  const homePage = () => {
    setPages("choosePerson");
  };

  useEffect(() => {
    getProfileToChoose();
  }, []);

  switch (pages) {
    case "choosePerson":
      return (
        <ChoosePerson
          getProfileToChoose={getProfileToChoose}
          profiles={profiles}
          getMatches={getMatches}
          setProfiles={setProfiles}
          choosePersonFalse={() => {
            choosePersonFalse(profiles.id);
          }}
          clearProfile={clearProfile}
        />
      );
    case "Matched":
      return (
        <Matches
          matchedProfiles={matchedProfiles}
          homePage={homePage}
          clearProfile={clearProfile}
        />
      );
    default:
      return;
  }
}

export default App;
