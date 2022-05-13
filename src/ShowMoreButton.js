import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


function ShowMoreButton() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        More info
      </Button>
    </>
  )
}

export default ShowMoreButton