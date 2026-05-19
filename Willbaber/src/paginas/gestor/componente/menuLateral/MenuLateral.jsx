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

const MenuLateral = ({ paginaAtiva, setPaginaAtiva }) => {
  return (
    <>
      <aside className="sidebar">
        {/* TOPO */}
        <div>
          <div className="sidebar-logo">
            <div className="logo-icon">
              <Shield size={18} />
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
          </nav>
        </div>
        {/* FOOTER */}
        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="user-avatar">
              A
            </div>
            <div className="user-info">
              <h3>Administrador</h3>
              <p>admin@willbarber.com</p>
            </div>
          </div>
          <button className="logout-button">
            <LogOut size={18} />
            Sair do painel
          </button>
        </div>
      </aside>
    </>
  )
}

export default MenuLateral