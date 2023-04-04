
import React, { useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';





const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async (e) => {
        e.preventDefault() //desabilita a execução até que seja concluído a tarefa
        await createUserWithEmailAndPassword(auth, email, password) //"await" aguarda pra ir adiante na execução
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/")

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

    }

    return (<div className='container-fluid p-0' style={{ backgroundColor: "#eadaea" }}>
        <Container>
            <Row>
                <div className="mx-auto col-md-4 d-flex vh-100">
                    <main className="form-signin w-100 m-auto" style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px", border: "1px solid #000", padding: "3rem", borderRadius: "18px" }}>
                        <Form>
                            <h1 className="h3 mb-3 fw-normal text-center">Crie sua conta!</h1>
                            <Form.Group className="mb-3" controlId="formBasicNome">
                                <Form.Control type="text" placeholder="Nome" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="E-mail" onChange={e => setEmail(e.currentTarget.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Senha" onChange={e => setPassword(e.currentTarget.value)} />
                            </Form.Group>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                <Button variant='' onClick={signUp} className="btn btn-outline-dark" type="submit">
                                    Confirmar
                                </Button>
                                <Link className="btn btn-outline-dark" to="/">Voltar</Link>
                            </div>
                        </Form>
                    </main>
                </div>
            </Row>
        </Container>

    </div>
    );
}


export default Register;