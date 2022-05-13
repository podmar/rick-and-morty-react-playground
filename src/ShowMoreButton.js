import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import CharacterModal from './CharacterModal';


function ShowMoreButton(props) {
  // const character = props.char;
  const image = props.char.image;
  const name = props.char.name;
  const gender = props.char.gender;
  const species = props.char.species;

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        More info
      </Button>
      {/* <CharacterModal show={show} char={character}/> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{`${species}, ${gender}`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ShowMoreButton