import React from 'react'
import { Card } from 'react-bootstrap'
import CharacterModal from './CharacterModal';

function CharacterCard(props) {
  const image = props.char.image;
  const name = props.char.name;
  const gender = props.char.gender;
  const species = props.char.species;
  const character = props.char;
  
  return (
    <div className='FlipCardInner'>

        <Card className='FlipCardFront'>
        <Card.Img variant="top" src={image} />
        </Card>

        <Card className='FlipCardBack HighlightColours'>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {`${species} ${gender}`}
            </Card.Text> 
            <CharacterModal char={character}/>
          </Card.Body>
        </Card>
    </div>
  )

}

export default CharacterCard