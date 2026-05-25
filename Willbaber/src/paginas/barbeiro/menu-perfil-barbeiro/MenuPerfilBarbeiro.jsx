import "./MenuPerfilBarbeiro.css"



const MenuPerfilBarbeiro = ({abaAtiva, setAbaAiva}) => {
    return (
        <>
            <div className="menu-dashboard-pagina-dashboard-barbeiro">

                <button className={ abaAtiva=== "dashboard" ?  "botao-menu-ativo-pagina-dashboard-barbeiro" : "botao-menu-pagina-dashboard-barbeiro"}
                    onClick={() => setAbaAiva("dashboard")}
                >
                    Dashboard
                </button>

                <button className={ abaAtiva=== "agenda" ?  "botao-menu-ativo-pagina-dashboard-barbeiro" : "botao-menu-pagina-dashboard-barbeiro"}
                 onClick={() => setAbaAiva("agenda")}
                 >
                    Agenda
                </button>

                <button className={ abaAtiva=== "perfil" ?  "botao-menu-ativo-pagina-dashboard-barbeiro" : "botao-menu-pagina-dashboard-barbeiro"}
                 onClick={() => setAbaAiva("perfil")}
                 >
                    Perfil
                </button>

            </div>
        </>
    )
}

export default MenuPerfilBarbeiro