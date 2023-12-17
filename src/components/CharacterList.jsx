/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import DragonBallImg from '../assets/dragonimg.png';


const CharacterList = ({ characters, searchTerm }) => {
  if (!Array.isArray(characters) || characters.length === 0) {
    return <p>No characters available.</p>;
  }

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (filteredCharacters.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#14225D]">
      <div className="flex-col">
      <img src={DragonBallImg} alt="Dragon Ball Image" width={400} height={400} className="p-4" />
        <p className="text-center font-semibold text-xl text-[#FF9525]">No characters found!!</p>
        <p className="text-center font-bold text-lg text-[#FF9525] mt-2">Please try again :)</p>
      </div>
      
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10 bg-[#14225D] min-h-screen">
      {filteredCharacters.map(character => (
        <Link key={character.id} to={`/character/${character.name}`}>
          <div
            key={character.id}
            className="p-12 shadow-lg border border-black rounded-2xl shadow-[rgb(238,46,43)] flex flex-col items-center bg-[#FF9525] transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img src={character.image} alt={character.name} className="w-58 h-56 object-contain" />
            <div className="text-center mt-4">
              <h3 className="font-extrabold text-xl text-[#243763]">{character.name}</h3>
              <h3 className="font-bold text-lg text-[#FCF9BE]">{character.race} - {character.gender}</h3>
              {/* <h3 className="font-bold text-red-500 hidden sm:block">Base KI: {character.ki}</h3> */}
              {/* <h3 className="font-bold text-red-500 hidden sm:block">Max KI: {character.maxKi}</h3> */}
              {/* <h3 className="font-bold text-red-500">{character.affiliation}</h3> */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CharacterList;
