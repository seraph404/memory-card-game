import { useState, useEffect } from "react";
import Card from "./Card.jsx";

const POKEMON_LIST = [
  "sandshrew",
  "gloom",
  "umbreon",
  "growlithe",
  "bellsprout",
  "sentret",
  "meowth",
  "beedrill",
  "psyduck",
  "goldeen",
];

function GameBoard() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const responses = await Promise.all(
        POKEMON_LIST.map((name) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
            res.json()
          )
        )
      );
      const simplified = responses.map((data) => ({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      }));
      setPokemonData(simplified);
    }
    fetchPokemon();
  }, []);

  function handleCardClick(id) {
    console.log("hi");
  }

  return (
    <div className="gameboard">
      {pokemonData.map((pokemon) => (
        <Card
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          onClick={() => handleCardClick(pokemon.id)}
        />
      ))}
    </div>
  );
}

export default GameBoard;
