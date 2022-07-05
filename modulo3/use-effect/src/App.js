import React from "react";
import axios from "axios";
import PokeCard from "./Components/PokeCard/PokeCard";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const getPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    axios
      .get(url)
      .then((res) => {
        setPokeList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChangePokeName = (e) => {
    setPokeName(e.target.value);
  };
  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <div className="App">
      <h2>Pokedéx</h2>
      <select name="" id="" onChange={onChangePokeName}>
        <option value={""}>nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option value={pokemon.name} key={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
