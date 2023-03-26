import './App.css';
//import React, { useState } from 'react';

//import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import { Container, Form, Image, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


/*const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Toast show={show} onClose={() => toggleShow(!show)}>
      <Toast.Header>
        <strong className="mr-auto">React-Bootstrap</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};*/

const App = () => (
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
                <Button variant='' className="btn btn-outline-dark" type="submit">
                  Criar conta
                </Button>
              </div>
            </Form>
          </main>
        </div>
      </Row>
    </Container>

  </div>
);

export default App;
