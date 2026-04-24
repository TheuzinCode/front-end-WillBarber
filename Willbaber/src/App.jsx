import Telainicial from "./paginas/tela-inicial/TelaInicial.jsx";
import Login from "./paginas/tela-login/Login.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Telainicial />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
