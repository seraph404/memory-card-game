import { useState, useEffect } from "react";

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

  return (
    <div>
      {pokemonData.map((pokemon) => (
        <div key={pokemon.id}>
          <img src={pokemon.image} />
          <div>{pokemon.name}</div>
        </div>
      ))}
    </div>
  );
}

export default GameBoard;
