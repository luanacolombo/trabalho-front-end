
import React, { useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';





const Recover = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const recoverPass = async (e) => {
        e.preventDefault() //desabilita a execução até que seja concluído a tarefa
        await sendPasswordResetEmail(auth, email) //"await" aguarda pra ir adiante na execução
            .then((e) => {
                console.log("Email sent successfully");
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
                            <h1 className="h3 mb-3 fw-normal text-center">Recupere sua conta!</h1>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="E-mail" onChange={e => setEmail(e.currentTarget.value)} />
                            </Form.Group>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                <Button variant='' onClick={recoverPass} className="btn btn-outline-dark" type="submit">
                                    Enviar
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


export default Recover;