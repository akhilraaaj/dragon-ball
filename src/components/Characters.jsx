/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import CharacterList from './CharacterList';
import axios from 'axios';
import DragonBallImg from '../assets/dragonimg.png';
import SearchBar from './SearchBar';
import Footer from './Footer';

const Characters = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://dragonball-api.com/api/characters?limit=150`);
      const { items } = response.data;
  
      console.log(`Number of items received: ${items.length}`);
    
      const filteredCharacters = searchTerm
        ? items.filter(character =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : items;
  
      console.log(`Number of filtered characters: ${filteredCharacters.length}`);
    
      setAllCharacters(filteredCharacters);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching characters:', error);
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchCharacters();
  }, []);
  

  if (loading) return ( 
    <div className="h-screen flex items-center justify-center bg-[#14225D]">
      <img src={DragonBallImg} alt="Dragon Ball Image" width={180} height={180} className="p-4" />
    </div>
  );

  return (
    <div className="flex flex-col">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex-grow overflow-y-auto pt-14">
        <CharacterList characters={allCharacters} searchTerm={searchTerm} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Characters;
