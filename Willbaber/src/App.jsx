import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Telainicial from "./paginas/tela-inicial/TelaInicial.jsx";
import Login from "./paginas/tela-login/Login.jsx";
import CriarConta from "./paginas/cliente/criar-conta/CriarConta.jsx";
import Agendamento from "./paginas/cliente/agendamento/TelaAgendamento.jsx"
import Secao2TelaAgendamento from "./paginas/cliente/agendamento/secao2/secao2TelaAgendamento.jsx";
import Secao3TelaAgendamento from "./paginas/cliente/agendamento/secao3/secao3TelaAgendamento.jsx";
import Secao4TelaAgendamento from "./paginas/cliente/agendamento/secao4/secao4TelaAgendamento.jsx";
import TelaPerfil from "./paginas/cliente/perfil/TelaPerfil.jsx";
import Meuperfil from "./paginas/cliente/perfil/componentes/meuperfil/Meuperfil.jsx";
import PaginaInicialGestor from "./paginas/gestor/PaginaInicialGestor.jsx";
import MeusAgendamentos from "./paginas/cliente/meus-agendamentos/MeusAgendamentos.jsx"
import PaginaRecompensas from './paginas/cliente/recompensas/PaginaRecompensas.jsx';
import PaginaPainelBarbeiro from './paginas/barbeiro/PaginaPainelBarbeiro.jsx';
import ProtectedAdminRoute from './componentes/protectedRule/protectedAdminRoute.jsx';
import ProtectedBarbeiroRoute from './componentes/protectedRule/protectedBarbeiroRoute.jsx';

function App() {

  return (
    <>
      <ToastContainer />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Telainicial />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/criarconta" element={<CriarConta />} />
          <Route path="/novo-agendamento" element={<Agendamento />} />
          <Route path="/selecionarServico" element={<Secao2TelaAgendamento />} />
          <Route path="/selecionarHorario" element={<Secao3TelaAgendamento />} />
          <Route path="/confirmarAgendamento" element={<Secao4TelaAgendamento />} />
          <Route path="/perfil" element={<TelaPerfil />} />
          <Route path="/editar-perfil" element={<Meuperfil />} />

          <Route path="/gestor/home" element={
            <ProtectedAdminRoute>
              <PaginaInicialGestor />
            </ProtectedAdminRoute>
          } />

          <Route path="/meus-agendamentos" element={<MeusAgendamentos />} />
          <Route path="/recompensas" element={<PaginaRecompensas />} />

          <Route path="/painel-barbeiro" element={
            <ProtectedBarbeiroRoute>
              <PaginaPainelBarbeiro />
            </ProtectedBarbeiroRoute>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
