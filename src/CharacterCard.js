import React from 'react'
import { Button, Card } from 'react-bootstrap'

function CharacterCard(data) {

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            <p>{`${data.species} ${data.gender}`}</p>
          </Card.Text>
          <Button variant="primary">More info</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CharacterCard