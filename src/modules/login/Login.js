
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Form, Image, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/home")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

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
                                    <Form.Control type="email" placeholder="E-mail" onChange={e => setEmail(e.currentTarget.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Senha" onChange={e => setPassword(e.currentTarget.value)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Lembrar-me" />
                                </Form.Group>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                    <Button variant='' onClick={onLogin} className="btn btn-outline-dark" type="submit">
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