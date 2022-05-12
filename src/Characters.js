import React, { useEffect, useState } from 'react'; 
import CharacterCard from './CharacterCard';

function Characters() {
    const [characters, setCharacters] = useState([])
    const fetchCharacters = async function () {
        try {
            const response = await fetch("https://rickandmortyapi.com/api/character/");
            const data = await response.json();
            const characterData = await data.results
            setCharacters(characterData)
            console.log(characters)
            // return characterData;
        } catch (err) {
            console.log(err);
        };
    };
    useEffect(() => {
      fetchCharacters()
    
     
    }, [])
    
    return (
        <div className='FlexRow WrapMargin'>
            {characters.map(character => CharacterCard(character))}
        </div>
  )
}

export default Characters