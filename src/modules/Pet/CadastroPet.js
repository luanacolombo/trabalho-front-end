import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { Button } from 'react-bootstrap';

const CadastroPet = () => {
    const navigate = useNavigate();
    const [nomePet, setNomePet] = useState('');
    const [raca, setRaca] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [cor, setCor] = useState('');
    const [sexo, setSexo] = useState('');

    const signUpPet = async (e) => {
        e.preventDefault() //desabilita a execução até que seja concluído a tarefa
        await createUserWithEmailAndPassword(auth, nomePet, raca, dataNasc, cor, sexo) //"await" aguarda pra ir adiante na execução
            .then((petCredential) => {
                const pet = petCredential.pet;
                console.log(pet);
                navigate("/home");

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

    }

    return (
        <div>
            <div className='container'>
                <div className='row'>

                    <div className="mx-auto col-md-4 mt-5">
                        <h1 className="h3 mb-3 fw-normal text-center">Cadastre seu pet!</h1>

                        <Form.Group className="mb-3" controlId="formBasicNomePet">
                            <Form.Control type="text" placeholder="Nome do Pet" onChange={e => setNomePet(e.currentTarget.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicRaca">
                            <Form.Control type="text" placeholder="Raça" onChange={e => setRaca(e.currentTarget.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicData">
                            <Form.Control type="date" placeholder="Data de Nascimento" onChange={e => setDataNasc(e.currentTarget.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCor">
                            <Form.Control type="text" placeholder="Cor" onChange={e => setCor(e.currentTarget.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicSexo">
                            <Form.Control type="text" placeholder="Sexo" onChange={e => setSexo(e.currentTarget.value)} />
                        </Form.Group>

                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <Button disabled variant='' onClick={signUpPet} className="btn btn-outline-dark" type="submit">
                                Confirmar
                            </Button>
                            <Link className="btn btn-outline-dark" to="/home">Voltar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CadastroPet;