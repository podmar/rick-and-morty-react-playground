import { Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import './App.css';
import Characters from "./Characters.js"
import CharacterModal from './CharacterModal';

function App() {
  return (
    <div className="App">
        <Navbar className='FlexRow HighlightColours' variant="dark">
          
          <Container>
            <Col xs={8}>
              <Navbar.Brand className='HighlightColours' href="#home">Rick and Morty Character List</Navbar.Brand>
            </Col>
            <Col>            
              <Form.Control type='input' placeholder="Search" />
            </Col>
          </Container>
       
        </Navbar>

      <Container>
        <Row>
          <Characters /> 
        </Row>

        <Row></Row>
        


      </Container>

    </div>
  );
}

export default App;
