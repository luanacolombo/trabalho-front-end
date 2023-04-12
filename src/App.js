import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../src/modules/login/Login";
import Register from "../src/modules/register/Register";
import Home from "./modules/home/Home";
import CadastroPet from "./modules/Pet/CadastroPet";
import Recover from "./modules/recoverPassword/Recover";
import ListaPet from "./modules/Pet/ListaPet";
import Header from "./components/Header";
import LayoutIndex from "./components/LayoutIndex";
import Perfil from "./modules/perfil/Perfil";




export default function App() {
  return (
    < Routes >
      <Route path="/" >
        <Route index element={<LayoutIndex><Login /></LayoutIndex>} />
        <Route path="/register" element={<LayoutIndex><Register /></LayoutIndex>} />
        <Route path="/recover" element={<LayoutIndex><Recover /></LayoutIndex>} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="/home" >
        <Route path="/home" element={<Header><Home /></Header>} />
      </Route>
      <Route path="/pet" >
        <Route path="/pet/" element={<Header><ListaPet /></Header>} />
        <Route path="/pet/cadastroPet" element={<Header><CadastroPet /></Header>} />
      </Route>
      <Route path="/perfil" element={<Header><Perfil /></Header>} ></Route>
    </Routes >
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