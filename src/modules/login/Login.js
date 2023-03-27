
import React from 'react';
import { Container, Form, Image, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container-fluid p-0' style={{ backgroundColor: "#eadaea" }}>
            <Container>
                <Row>
                    <div className="mx-auto col-md-4 d-flex vh-100">
                        <main className="form-signin w-100 m-auto">
                            <Form>
                                <Image className="mb-4 img-thumbnail" src="/logo.jpeg"></Image>
                                <h1 className="h3 mb-3 fw-normal text-center">Acesse sua conta</h1>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="E-mail" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Senha" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Lembrar-me" />
                                </Form.Group>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                    <Button variant='' className="btn btn-outline-dark" type="submit">
                                        Entrar
                                    </Button>
                                    <Button variant='' className="btn btn-outline-dark" type="submit">
                                        Esqueci minha senha
                                    </Button>
                                    <Link className="btn btn-outline-dark" to="/register">Criar conta</Link>
                                </div>
                            </Form>
                        </main>
                    </div>
                </Row>
            </Container>
        </div>
    );
}


export default Login;