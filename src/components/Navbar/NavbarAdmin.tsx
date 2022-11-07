import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/adminPage">MSLES</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/layoutAdmin">Layout</Nav.Link>
                <Nav.Link href="/drawAdmin">Draw</Nav.Link>
                <Nav.Link href="/pongAdmin">Pong</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </>
  );
}

export default NavbarComponent;