import { Container, Navbar, Row } from 'react-bootstrap';
import './App.css';
import Characters from "./Characters.js"

function App() {
  return (
    <div className="App">
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">Rick and Morty Character List</Navbar.Brand>
          </Container>
        </Navbar>
      <Container>
      
        <Row>

        </Row>
    
        <Row>
          {/* <p>This is the main App component.</p> */}
          <Characters /> 
        </Row>

        <Row></Row>
        
      </Container>

    </div>
  );
}

export default App;
