import { Container, Navbar, Row } from 'react-bootstrap';
import './App.css';
import Characters from "./Characters.js"

function App() {
  return (
    <div className="App">
        <Navbar bg="light" variant="light" className='FlexRow'>
          <Navbar.Brand href="#home">Rick and Morty Character List</Navbar.Brand>
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
