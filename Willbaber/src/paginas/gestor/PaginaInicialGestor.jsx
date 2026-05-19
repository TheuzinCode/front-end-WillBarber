import MenuLateral from "./componente/menuLateral/MenuLateral.jsx"
import PaginaAgendamento from "./componente/paginaAgendamento/PaginaAgendamento.jsx"
import PaginaBarbeiro from "./componente/paginaBarbeiro/PaginaBarbeiro.jsx"
import PaginaCliente from "./componente/paginaCliente/PaginaClientes.jsx"
import PaginaDashboard from "./componente/paginaDashboard/PaginaDashboard.jsx"
import PaginaServico from "./componente/paginaServico/PaginaServico.jsx"
import "./PaginaInicialGestor.css"

import { useEffect, useState } from "react";


const PaginaInicialGestor = () => {

  const [paginaAtiva, setPaginaAtiva] = useState("Dashboard");
  return (
    <>
      <div className="container-pagina-inicial-gestor-central">

        <MenuLateral
          paginaAtiva={paginaAtiva}
          setPaginaAtiva={setPaginaAtiva}
        />

        <div className="conteudo-pagina-gestor">

          {paginaAtiva === "Dashboard" && (
            <PaginaDashboard />
          )}

          {paginaAtiva === "Barbeiros" && (
            <PaginaBarbeiro />
          )}

          {paginaAtiva === "Servicos" && (
            <PaginaServico />
          )}

          {paginaAtiva === "Agendamentos" && (
            <PaginaAgendamento />
          )}

        </div>

      </div>


    </>
  )
}

export default PaginaInicialGestor