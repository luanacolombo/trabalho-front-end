import './App.css';
//import React, { useState } from 'react';

//import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';
import {  Container, Form, Image, Row } from 'react-bootstrap';
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
  <div className='container-fluid p-0'>
    <Container>
    <Row>
      <div className="mx-auto col-md-4 d-flex vh-100">
        <main className="form-signin w-100 m-auto">
          <Form>
            <Image className="mb-4 img-thumbnail" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"></Image>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </main>
      </div>
    </Row>
    </Container>
    <footer style={{bottom:0, position:"absolute",width: "100%"}} className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24"></svg>
          </a>
          <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-muted" href="#"></a></li>
          <li className="ms-3"><a className="text-muted" href="#"></a></li>
          <li className="ms-3"><a className="text-muted" href="#"></a></li>
        </ul>
      </footer>
      </div>
);

export default App;
