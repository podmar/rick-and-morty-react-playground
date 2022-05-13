import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'


function CharacterModal(props) {
  const image = props.char.image;
  const name = props.char.name;
  const gender = props.char.gender;
  const species = props.char.species;

  const [show, setShow] = useState(props.show);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
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

export default CharacterModal