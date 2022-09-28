import axios from "axios";

const pokemonList = [];

async function loadPokemons(url) {
  const pokemonResponse = await axios.get(url);
  pokemonResponse.data.results.map((res) =>
    pokemonList.push(axios.get(res?.url))
  );
  const allPokemons = await Promise.all(pokemonList);
  console.log(allPokemons);
  return allPokemons;
}

export default loadPokemons;
