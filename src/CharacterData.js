import React, { useEffect, useState } from 'react'; 

function CharacterData() {
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
        <div>
            <p>This is the CharacterData component that is fetching the character data.</p>
        </div>
  )
}

export default CharacterData