import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap"
import Footer from "./Footer"
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useEffect } from "react";

const Header = ({ children }) => {
    const navigate = useNavigate();


    useEffect(() => {
        if (!localStorage.getItem('uid')) {
            console.log(localStorage.getItem('uid'))
            alert('You are not authenticated');
            navigate("/")
        }
    });

    const logOut = async (e) => {
        e.preventDefault() //desabilita a execução até que seja concluído a tarefa
        await signOut(auth) //"await" aguarda pra ir adiante na execução
            .then((e) => {
                console.log(e);
                localStorage.removeItem('uid')
                navigate("/")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

    }
    return (
        <div>
            <Navbar style={{ background: "rgb(226,176,227)" }} expand="lg">
                <Container>
                    <Navbar.Brand href="/home" >
                        <Image style={{ width: "auto", height: "50px" }} src="/logoMenu.png"></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/perfil">Perfil</Nav.Link>
                            <NavDropdown title="Pets" id="basic-nav-dropdown">
                                <NavDropdown.Item href="pet/CadastroPet">Cadastrar Pet</NavDropdown.Item>
                                <NavDropdown.Item href="/pet">Lista Pet</NavDropdown.Item>

                            </NavDropdown>
                            <Nav.Link onClick={logOut}>Sair</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ minHeight: "300px" }}>
                {children}
            </div>
            <div style={{ position: "absolute", bottom: "0", textAlign: "center", width: "100%" }}>
                <Footer />
            </div>

        </div>
    )

}
export default Header