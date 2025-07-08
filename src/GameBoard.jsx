import { useState, useEffect } from "react";
import Score from "./Score.jsx";
import Card from "./Card.jsx";

const POKEMON_LIST = [
  "bellsprout",
  "vileplume",
  "grimer",
  "weezing",
  "garbodor",
  "spinarak",
  "weedle",
  "beedrill",
  "ekans",
  "dustox",
  "venonat",
  "nidorina",
  "tentacool",
  "gastly",
  "zubat",
];

function GameBoard() {
  const [pokemonData, setPokemonData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickHistory, setClickHistory] = useState([]);

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
    shuffle(pokemonData);

    if (!clickHistory.includes(id)) {
      setClickHistory((prev) => [...prev, id]);
      setScore((prev) => prev + 1);
    } else {
      setClickHistory([]);
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
    }
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function renderCards() {
    return pokemonData.map((pokemon) => (
      <Card
        key={pokemon.id}
        name={pokemon.name}
        image={pokemon.image}
        onClick={() => handleCardClick(pokemon.id)}
      />
    ));
  }

  return (
    <div className="gameboard">
      <div className="instructions">
        <p>
          <span>How to play: </span>
          In this game, you are presented with a grid of cards. Each time you
          click a card you haven’t clicked before, your score increases by one.
          However, if you click a card you’ve already selected, your score
          resets to zero and the game restarts. The objective is to click
          through all the cards once each, without repeating any, to achieve the
          highest possible score.
        </p>
      </div>
      <Score currentScore={score} highScore={highScore} pokemon={pokemonData} />
      <div className="cards">{renderCards()}</div>
    </div>
  );
}

export default GameBoard;
