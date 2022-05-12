import React from 'react'
import { Button, Card } from 'react-bootstrap'

function CharacterCard(data) {
  
  return (
    <div className='FlipCard'>

      <div className='FlipCardInner'>

          <Card className='FlipCardFront'>
          <Card.Img variant="top" src={data.image} />
          </Card>

          <Card className='FlipCardBack HighlightColours'>
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                <p>{`${data.species} ${data.gender}`}</p>
              </Card.Text>
              <Button variant="primary">More info</Button>
            </Card.Body>
          </Card>
      </div>
    </div>
  )

}

export default CharacterCard