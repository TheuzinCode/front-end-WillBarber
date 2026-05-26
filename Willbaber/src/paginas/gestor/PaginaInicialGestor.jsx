import MenuLateral from "./componente/menuLateral/MenuLateral.jsx"
import PaginaAgendamento from "./componente/paginaAgendamento/PaginaAgendamento.jsx"
import PaginaBarbeiro from "./componente/paginaBarbeiro/PaginaBarbeiro.jsx"
import PaginaCliente from "./componente/paginaCliente/PaginaClientes.jsx"
import PaginaDashboard from "./componente/paginaDashboard/PaginaDashboard.jsx"
import PaginaServico from "./componente/paginaServico/PaginaServico.jsx"
import PaginaRecompensa from "./componente/paginaRecompensas/PaginaRecompensas.jsx"
import "./PaginaInicialGestor.css"
import { useEffect, useState } from "react";


const PaginaInicialGestor = () => {

  const [gestor, setGestor] = useState(null)

  useEffect(() => {

    async function BuscarUsuario() {

      const clientoSalvo = localStorage.getItem("clientAuth")

      if (clientoSalvo) {
        const clientObj = JSON.parse(clientoSalvo)

        try {
          const resp = await fetch(
            `http://localhost:8080/willbarber/gestor/meu-perfil/${clientObj.id}`
          )
          const data = await resp.json()
          if (!resp.ok) {

            console.log(data)
            return
          }

          setGestor(data)


        } catch (error) {
          console.log("ERROR AO BUSCAR O USUARIO")
        }
      }
    }

    BuscarUsuario();
  }, [])

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
            <PaginaDashboard gestor={gestor}/>
          )}

          {paginaAtiva === "Barbeiros" && (
            <PaginaBarbeiro gestor={gestor}/>
          )}

          {paginaAtiva === "Servicos" && (
            <PaginaServico gestor={gestor}/>
          )}

          {paginaAtiva === "Agendamentos" && (
            <PaginaAgendamento gestor={gestor}/>
          )}

           {paginaAtiva === "Recompensa" && (
            <PaginaRecompensa gestor={gestor}/>
          )}
        </div>

      </div>


    </>
  )
}

export default PaginaInicialGestor