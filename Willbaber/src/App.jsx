import Telainicial from "./paginas/tela-inicial/TelaInicial.jsx";
import Login from "./paginas/tela-login/Login.jsx";
import CriarConta from "./paginas/cliente/criar-conta/CriarConta.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Telainicial />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/criarconta" element={<CriarConta />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
