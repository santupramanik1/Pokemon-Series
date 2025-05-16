import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { Loading } from "./Loading";

export const Pokemon = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

  const [pokemon, setPokemon] = useState([]); //for set the api data
  const [loading, setLoading] = useState(true); //for loading
  const [search, setSearch] = useState(""); //for seacrh functionality

  const fetchPokemon = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json(); //convert to json

      //   Here we fetch the api data using the results url
      const detailedPokemonData = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const pokemonData = await res.json();
        return pokemonData;
      });
      const detailedReponse = await Promise.all(detailedPokemonData); //Extract the data from the promises
      console.log(detailedReponse);
      setPokemon(detailedReponse);
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, []);

const searchData=pokemon.filter((currPokemon)=>{
 return  currPokemon.name.toLowerCase().includes(search.toLowerCase())
})
  // Loading
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className=" min-h-screen flex flex-col items-center p-4">
        {/* <!-- Title --> */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Let's Catch Pokémon
        </h1>

        {/* <!-- Search Bar --> */}
        <div className="w-full max-w-md mb-6">
          <input
            type="text"
            placeholder="Search Pokémon..."
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {/* <!-- Pokémon Cards Grid --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
          {searchData.map((currPokemon) => {
            return (
              <PokemonCard
                currPokemon={currPokemon}
                key={currPokemon.id}
              ></PokemonCard>
            );
          })}
        </div>

        {/* Pokémon Cards Grid End */}
      </div>
    </>
  );
};
