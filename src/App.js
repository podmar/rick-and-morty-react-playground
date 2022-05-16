import { Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import './App.css';
import Characters from "./Characters.js"
import { useState } from 'react';

function App() {
    const [url, changeUrl] = useState("https://rickandmortyapi.com/api/character")
    const [searchValue, changeSearchValue] = useState("")

    const handleChange = (e) => {
        changeSearchValue(e.target.value.toLowerCase())
    }

  return (
    <div className="App">
        <Navbar className='FlexRow HighlightColours' variant="dark">
          
          <Container>
            <Col xs={8}>
              <Navbar.Brand className='HighlightColours' href="#home">Rick and Morty Character List</Navbar.Brand>
            </Col>
            <Col>            
              <Form.Control type='input' placeholder='Search' onChange={ handleChange }/>
            </Col>
          </Container>
       
        </Navbar>

      <Container>
        <Row>
          <Characters url={url} searchValue={searchValue}/> 
        </Row>

        <Row></Row>

      </Container>

    </div>
  )
}

export default App
