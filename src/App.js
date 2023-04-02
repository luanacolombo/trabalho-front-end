import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../src/modules/login/Login";
import Register from "../src/modules/register/Register";
import Home from "./modules/home/Home";




export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Erro 404</h2>
      <p> Pagina não encontrada</p>
      <p>
        <Link to="/">Voltar tela inicial</Link>
      </p>
    </div>
  );
}