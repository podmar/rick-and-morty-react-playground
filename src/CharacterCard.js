import React from 'react'
import { Button, Card } from 'react-bootstrap'

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
            <Button variant="primary">More info</Button>
          </Card.Body>
        </Card>
    </div>
  )

}

export default CharacterCard