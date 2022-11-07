import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getAuth } from "firebase/auth";

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function NavbarComponent() {

    const auth = getAuth();
    const navigate = useNavigate();

    const username = async () => await auth.currentUser?.displayName;

    useEffect(() => {
        const username = async () => await auth.currentUser?.displayName;
        if (!username) {
            navigate('/');
        }
    });

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/guestPage">MSLES</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/layoutGuest">Layout</Nav.Link>
                    <Nav.Link href="/drawGuest">Draw</Nav.Link>
                    <Nav.Link href="/pongGuest">Pong</Nav.Link>
                </Nav>
                <Navbar.Brand className="justify-content-end">
                        Signed in as: {auth.currentUser?.displayName}
                </Navbar.Brand>
            </Container>
        </Navbar>
  );
}

export default NavbarComponent;
