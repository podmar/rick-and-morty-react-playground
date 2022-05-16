import React, { useEffect, useState } from 'react'; 
import CharacterCard from './CharacterCard';

function Characters(props) {
    const searchValue = props.searchValue;
    const url = props.url;

    const [characters, setCharacters] = useState([])
    const fetchCharacters = async function () {
        try {
            const response = await fetch(url)
            const data = await response.json()
            const characterData = await data.results
            setCharacters(characterData)

        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
      fetchCharacters()

     
    }, [])
    
    return (
        <div className='FlexRow WrapMargin'>
            {characters && characters.filter(character => character.name.toLowerCase().includes(searchValue)).map(character => {
                return (
                    <div 
                        className='FlipCard' 
                        key={character.id}
                        >
                        <CharacterCard char={character}/>
                    </div>)
            })}
        </div>
  )
}

export default Characters