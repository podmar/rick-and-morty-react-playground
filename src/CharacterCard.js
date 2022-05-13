import React from 'react'
import { Card } from 'react-bootstrap'
import ShowMoreButton from './ShowMoreButton';

function CharacterCard({props}) {
  const image = props.image;
  const name = props.name;
  const gender = props.gender;
  const species = props.species;
  
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
            <ShowMoreButton />
          </Card.Body>
        </Card>
    </div>
  )

}

export default CharacterCard