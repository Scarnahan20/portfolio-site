import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Stefan Carnahan</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="main-navbar-nav">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#work">Work</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;