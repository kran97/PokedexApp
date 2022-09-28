import "./App.css";
import Todo from "./components/Todo";
import loadPokemons from "./service-helper/service-helper";
import { useState, useEffect } from "react";
import Pokemon from "./components/Pokemon";

function App() {
  const rows = [];
  const content = [
    "Learn React",
    "Master React",
    "Explore the whole React course",
  ];
  for (let i = 0; i < content.length; i++) {
    rows.push(<Todo text={content[i]} key={i} />);
  }

  const [isLoading, setIsLoading] = useState(true);
  const [loadedPokemons, setLoadedPokemons] = useState([]);

  // const pokemonList = [];
  /** Fetch method */
  // fetch(
  //   'https://pokeapi.co/api/v2/pokemon'
  //   ).then((data) => {
  //   console.log(data);
  // });

  /** Axios within Axios method */
  // axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
  //   res.data.results.map((result) => {
  //     axios.get(result?.url).then((res) => {
  //       pokemonList.push(res.data);
  //     });
  //   });
  //   console.log(pokemonList);
  // });

  /** Axios with Promise.all method */
  // async function loadPokemons(url) {

  //   const pokemonResponse = await axios.get(url);
  //   pokemonResponse.data.results.map((res) => pokemonList.push(axios.get(res?.url)));
  //   const allPokemons = await Promise.all(pokemonList);
  //   console.log(allPokemons);
  // }

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
  useEffect(() => {
    setIsLoading(true);
    loadPokemons(BASE_URL).then((res) => {
      setLoadedPokemons(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <main>
      <header className="header">
        <h1 className="title">Pokédex</h1>
        <h3 className="subTitle">Search for any pokemon that exists on the planet</h3>
      </header>
      {/* One way of doing it. */}
      {/* <div className="row">
        {rows}
      </div> */}

      {/* Second way of showing a list or loop */}
      {/* {content.map((text, index) => {
        return (
          <li key={index}><Todo text={text} /></li>
        )
      })} */}

      {/* Third way of showing a list */}
      {/* <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore the whole React course" /> */}

      <div className="container">
        {
          loadedPokemons.map((pokemon, index) => {
            return <Pokemon pokemonData={pokemon} key={index} />;
          })
        }
      </div>
    </main>
  );
}

export default App;
