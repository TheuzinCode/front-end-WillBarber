import Telainicial from "./paginas/tela-inicial/TelaInicial.jsx";
import Login from "./paginas/tela-login/Login.jsx";
import CriarConta from "./paginas/cliente/criar-conta/CriarConta.jsx";
import Agendamento from "./paginas/cliente/agendamento/TelaAgendamento.jsx"
import Secao2TelaAgendamento from "./paginas/cliente/agendamento/secao2/secao2TelaAgendamento.jsx";
import Secao3TelaAgendamento from "./paginas/cliente/agendamento/secao3/secao3TelaAgendamento.jsx";
import Secao4TelaAgendamento from "./paginas/cliente/agendamento/secao4/secao4TelaAgendamento.jsx";
import TelaPerfil from "./paginas/cliente/perfil/TelaPerfil.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Meuperfil from "./paginas/cliente/perfil/componentes/meuperfil/Meuperfil.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Telainicial />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/criarconta" element={<CriarConta />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/selecionarServico" element={<Secao2TelaAgendamento />} />
          <Route path="/selecionarHorario" element={<Secao3TelaAgendamento />} />
          <Route path="/confirmarAgendamento" element={<Secao4TelaAgendamento />} />
          <Route path="/perfil" element={<TelaPerfil />} />
          <Route path="/editar-perfil" element={<Meuperfil />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
