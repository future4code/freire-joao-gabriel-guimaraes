import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function PokeCard(props) {
  const [pokemon, setPokemon] = useState({});

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  return (
    <div>
      <p>
        <strong>Nome: </strong> {pokemon.name}
      </p>
      <p>
        <strong>Peso: </strong> {pokemon.weight} kg
      </p>
      {pokemon.types && (
        <p>
          <strong>Tipo: </strong>
          {pokemon.types[0].type.name}
        </p>
      )}

      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}
export default PokeCard;
