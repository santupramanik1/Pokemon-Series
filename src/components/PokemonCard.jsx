export const PokemonCard = ({ currPokemon }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
      key={currPokemon.id}
    >
      <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center mb-2">
        <img
          src={`${currPokemon.sprites.other.dream_world.front_default}`}
          alt="Bulbasaur"
          className="w-36 h-36"
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">
        {currPokemon.name}
      </h2>
      <div className="flex space-x-2 my-2">
        {currPokemon.types.map((currTypes, index) => {
          return (
            <span
              className={` ${
                index % 2 == 0 ? "bg-green-500" : "bg-purple-500"
              } text-white text-sm px-3 py-1 rounded-full `}
              key={index}
            >
              {currTypes.type.name}
            </span>
          );
        })}
      
      </div>
      {/* <!-- Stats --> */}
      <div className="grid grid-cols-2 gap-2 text-gray-800 text-sm">
        <div className="bg-blue-100 rounded-lg p-2 text-center">
          Height: {currPokemon.height}
        </div>
        <div className="bg-blue-100 rounded-lg p-2 text-center">
          Weight: {currPokemon.weight}
        </div>
        <div className="bg-blue-100 rounded-lg p-2 text-center">Speed: {currPokemon.stats[5].base_stat}</div>
        <div className="bg-blue-100 rounded-lg p-2 text-center">
          Experience: {currPokemon.base_experience}
        </div>
        <div className="bg-blue-100 rounded-lg p-2 text-center">Attack: 52</div>
        <div className="bg-blue-100 rounded-lg p-2 text-center">
          Abilities: {
            currPokemon.abilities.map((abilityInfo)=>abilityInfo.ability.name).slice(0,1).join(", ")
          }
        </div>
      </div>
    </div>
  );
};
