import {
  LayoutDashboard,
  Scissors,
  Gem,
  CalendarDays,
  Medal,
  LogOut,
  Shield,
} from "lucide-react";
import "./MenuLateral.css"
import logoBarbearia from "../../../../imgs/logo.png"
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiPresent } from "react-icons/gi";

const MenuLateral = ({ paginaAtiva, setPaginaAtiva }) => {

  const navigate = useNavigate()

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


  const deslogarGestor = () => {
    localStorage.removeItem("clientAuth")
     setGestor(null)
     navigate("/")
  }
  return (
    <>
      <aside className="sidebar">
        {/* TOPO */}
        <div>
          <div className="sidebar-logo">
            <div>
              <img className="imagem-logo-menu-lateral-adm" src={logoBarbearia} alt="logo" />
            </div>
            <div className="logo-info">
              <h2>Will Barber</h2>
              <span>Admin Panel</span>
            </div>
          </div>
          {/* MENU */}
          <nav className="sidebar-menu">
            <button
              className={paginaAtiva === "Dashboard" ? "menu-item active" : "menu-item"}
              onClick={() => setPaginaAtiva("Dashboard")}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </button>

            <button
              className={paginaAtiva === "Barbeiros" ? "menu-item active" : "menu-item"}
              onClick={() => setPaginaAtiva("Barbeiros")}>
              <Scissors size={18} />
              Barbeiros
            </button>

            <button
              className={paginaAtiva === "Servicos" ? "menu-item active" : "menu-item"}
              onClick={() => setPaginaAtiva("Servicos")}>
              <Gem size={18} />
              Serviços & Preços
            </button>

            <button
              className={paginaAtiva === "Agendamentos" ? "menu-item active" : "menu-item"}
              onClick={() => setPaginaAtiva("Agendamentos")}>
              <CalendarDays size={18} />
              Agendamentos
            </button>

             <button
              className={paginaAtiva === "Recompensa" ? "menu-item active" : "menu-item"}
              onClick={() => setPaginaAtiva("Recompensa")}>
              <GiPresent size={18} />
              Recompensas
            </button>

            
          </nav>
        </div>
        {/* FOOTER */}
        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="user-avatar">
              {gestor?.nomeCompleto.charAt(0)}
            </div>
            <div className="user-info">
              <h3>{gestor?.nomeCompleto}</h3>
              <p>{gestor?.email}</p>
            </div>
          </div>
          <button 
          className="logout-button"
          onClick={deslogarGestor}
          >
            <LogOut size={18} />
            Sair do painel
          </button>
        </div>
      </aside>
    </>
  )
}

export default MenuLateral