/* eslint-disable react/no-unescaped-entities */
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DragonBallImg from '../assets/dragonimg.png';


const CharacterDetails = () => {
  const { name } = useParams();
  const [character, setCharacter] = useState(null);
  const [transformations, setTransformations] = useState([]);

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      try {
        const response = await fetch(`https://dragonball-api.com/api/characters?limit=150`);
        if (response.ok) {
          const data = await response.json();
          const foundCharacter = data.items.find(char => char.name.toLowerCase() === name.toLowerCase());
          if (foundCharacter) {
            setCharacter(foundCharacter);
            fetchTransformations(foundCharacter.id); 
          } else {
            throw new Error('Character details not found');
          }
        } else {
          throw new Error('Failed to fetch characters');
        }
      } catch (error) {
        console.error(error);
        setCharacter(null);
      }
    };

    fetchCharacterDetails();
  }, [name]);

  const fetchTransformations = async (characterId) => {
    try {
      const response = await fetch(`https://dragonball-api.com/api/characters/${characterId}?limit=150`);
      if (response.ok) {
        const data = await response.json();
        setTransformations(data.transformations || []);
      } else {
        throw new Error('Failed to fetch transformations');
      }
    } catch (error) {
      console.error(error);
      setTransformations([]);
    }
  };

  if (!character) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#14225D]">
        <img src={DragonBallImg} alt="Dragon Ball Image" width={400} height={400} className="p-4" />
        <h1 className='font-extrabold text-center text-base sm:text-xl text-[#FF9525]'>Uh Oh! Can't find any specific details for this character.</h1>
      </div>
    );
  }

  return (
    <div className='bg-[#14225D] min-h-screen'>
    <div className='fixed top-0 w-full z-30 bg-[rgb(238,46,43)] shadow-md'>
      <div className='flex items-center justify-between px-4 md:px-10'>
        <div className='flex items-center gap-1'>
          <a href="/">
            <img src={DragonBallImg} alt="Dragon Ball Image" width={180} height={180} className="p-3" />
          </a>
      </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row items-center p-24">
    <div className="flex p-10 shadow-lg border border-black rounded-2xl shadow-[rgb(238,46,43)] bg-[#FF9525] transition duration-300 ease-in-out transform hover:scale-105" style={{ width: '350px', height: '380px' }}
    onClick={()=>document.getElementById('my_modal_2').showModal()}
    >
    <dialog id="my_modal_2" className="modal">
    <div className="modal-box bg-[#FF9525] flex flex-col items-center justify-center overflow-hidden" style={{ width: '450px', height: '480px' }}>
    <img src={character.image} alt={character.name} className="object-cover mb-4" style={{ maxWidth: '90%', maxHeight: '90%' }} /> 
    <h3 className="font-extrabold text-[#243763] text-lg">{character.name}</h3>
    <h3 className="font-bold text-[#FCF9BE] text-lg">KI: {character.ki}</h3>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
    </dialog>
    <img src={character.image} alt={character.name} width={250} height={300} className="object-contain cursor-pointer" />
    </div>
    <div className="flex-1 p-4 sm:p-10 text-center sm:text-left m-2">
      <h3 className="font-extrabold text-4xl sm:text-9xl  text-[#FB8B24] text-shadow-xl mb-12 mt-2">{character.name}</h3>
      <h3 className="font-bold text-xl sm:text-2xl text-[#FBECB2] mb-1">Race<span className='ml-1 mr-1'>:</span> <span className='text-[#F4BF96]'>{character.race}</span></h3>
      <h3 className="font-bold text-xl sm:text-2xl text-[#FBECB2] mb-1">Gender<span className='ml-1 mr-1'>:</span> <span className='text-[#F4BF96]'>{character.gender}</span></h3>
      <h3 className="font-bold text-xl sm:text-2xl text-[#FBECB2] mb-1">Base KI<span className='ml-1 mr-1'>:</span> <span className='text-[#F4BF96]'>{character.ki}</span></h3>
      <h3 className="font-bold text-xl sm:text-2xl text-[#FBECB2] mb-1">Max KI<span className='ml-1 mr-1'>:</span> <span className='text-[#F4BF96]'>{character.maxKi}</span></h3>
      <h3 className="font-bold text-xl sm:text-2xl text-[#FBECB2] mb-1">Affiliation<span className='ml-1 mr-1'>:</span> <span className='text-[#F4BF96]'>{character.affiliation}</span></h3>
      <div className='mt-4'>
      {/* <h3 className="font-bold text-lg sm:text-xl text-red-500">Description:</h3> */}
      {/* <p className="text-sm sm:text-sm text-red-500">{character.description}</p> */}
      </div>
    </div>
  </div>

  <div className='p-4'>
  <h3 className="font-extrabold text-2xl sm:text-3xl text-[#FB8B24] text-center underline">Transformations</h3>
  <div className='flex flex-wrap justify-center gap-4 mt-4 ml-1'>
    {transformations.length > 0 ? (
      transformations.map(transformation => (
        <div key={transformation.id} className="flex flex-col items-center px-10 py-16 shadow-lg border border-black rounded-2xl shadow-[rgb(238,46,43)] bg-[#FF9525] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer" style={{ width: '350px', height: '380px' }} onClick={() => document.getElementById(`my_modal_${transformation.id}`).showModal()}>
          <img src={transformation.image} alt={transformation.name} className="object-cover mb-4" style={{ maxWidth: '95%', maxHeight: '95%' }} />
          <div className="text-center mb-2">
            <h3 className="font-extrabold text-[#243763] text-lg">{transformation.name}</h3>
            <dialog id={`my_modal_${transformation.id}`} className="modal">
            <div className="modal-box bg-[#FF9525] flex flex-col items-center justify-center overflow-hidden" style={{ width: '450px', height: '480px' }}>
              <img src={transformation.image} alt={transformation.name} className="object-cover mb-4" style={{ maxWidth: '90%', maxHeight: '90%' }} />
              <h3 className="font-extrabold text-[#243763] text-lg">{transformation.name}</h3>
              <h3 className="font-bold text-[#FCF9BE] text-lg">KI: {transformation.ki}</h3>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button onClick={() => document.getElementById(`my_modal_${transformation.id}`).close()}>Close</button>
            </form>
            </dialog>
        </div>
      </div>
    ))) : (
        <div className={`${transformations.length === 0 ? 'flex flex-col items-center w-full' : 'hidden'}`}>
          <p className="whitespace-nowrap text-center font-bold text-xs sm:text-lg text-[#FBECB2]">
          Uh Oh! {character.name} does not possess any transformation abilities !!
          </p>
        </div>
    )}
  </div>
  </div>
  </div>
);
};

export default CharacterDetails;
