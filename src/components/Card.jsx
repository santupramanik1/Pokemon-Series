export const Card = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4">
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
        />
      </div>

      {/* <!-- Pokémon Cards Grid --> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {/* -- Card 1 -- start */}
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
          <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center mb-2">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
              alt="Bulbasaur"
              className="w-36 h-36"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Bulbasaur</h2>
          <div className="flex space-x-2 my-2">
            <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
              Grass
            </span>
            <span className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full">
              Poison
            </span>
          </div>
          {/* <!-- Stats --> */}
          <div className="grid grid-cols-2 gap-2 text-gray-800 text-sm">
            <div className="bg-blue-100 rounded-lg p-2 text-center">
              Height: 6
            </div>
            <div className="bg-blue-100 rounded-lg p-2 text-center">
              Weight: 85
            </div>
            <div className="bg-blue-100 rounded-lg p-2 text-center">
              Speed: 65
            </div>
            <div className="bg-blue-100 rounded-lg p-2 text-center">
              Experience: 62
            </div>
            <div className="bg-blue-100 rounded-lg p-2 text-center">
              Attack: 52
            </div>
            <div className="bg-blue-100 rounded-lg p-2 text-center">
              Abilities: blaze
            </div>
          </div>
        </div>
        {/* -- Card 1 -- End*/}

        
      </div>
    </div>
  );
};
