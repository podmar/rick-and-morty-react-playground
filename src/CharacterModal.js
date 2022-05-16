import React, { useState } from 'react'
import { Button, Image, Modal } from 'react-bootstrap'

function CharacterModal(props) {
  const image = props.char.image;
  const name = props.char.name;
  const gender = props.char.gender;
  const species = props.char.species;
  const location = props.char.location.name;
  const type = props.char.type;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        More info
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Image src={image} alt="character image"></Image>
        <Modal.Body>{`${species} ${gender}${type ? (", more specifically a " + type) : ""}, located in ${location}.`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CharacterModal