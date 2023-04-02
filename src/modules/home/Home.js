import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Home = () => {

    return (
        <Navbar style={{ background: "rgb(234, 218, 234)" }} expand="lg">
            <Container>
                <Navbar.Brand href="#home" >
                    <Image style={{ width: "auto", height: "50px" }} src="/logoMenu.png"></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Perfil</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}


export default Home;