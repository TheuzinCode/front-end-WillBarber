import "./PaginaPainelBarbeiro.css"
import { useEffect, useState } from "react";
import Cabecalho from "../../componentes/cabecalho/cabecalho"
import CardPerfilBarbeiro from "./card-perfil-barbeiro/CardPerfilBarbeiro"
import MenuPerfilBarbeiro from "./menu-perfil-barbeiro/MenuPerfilBarbeiro"
import PaginaAgendaBarbeiro from "./pagina-agenda-barbeiro/PaginaAgendaBarbeiro"
import PaginaDashboardBarbeiro from "./pagina-dashboard-barbeiro/PaginaDashboardBarbeiro"
import PaginaPerfilBarbeiro from "./pagina-perfil-barbeiro/PaginaPerfilBarbeiro"

const PaginaPainelBarbeiro = () => {

    const [abaAtiva, setAbaAtiva] = useState("dashboard")


    return (
        <>
            <Cabecalho estatico={true} />

            <div className="cor-de-fundo-pagina-painel-barbeiro">
                <CardPerfilBarbeiro />
                <div className="container-principal-pagina-painel-barbeiro">
                <MenuPerfilBarbeiro abaAtiva={abaAtiva} setAbaAiva={setAbaAtiva}/>


                {abaAtiva === "dashboard" && (
                    <PaginaDashboardBarbeiro />
                )}

                {abaAtiva === "agenda" && (
                    <PaginaAgendaBarbeiro />
                )}

                {abaAtiva === "perfil" && (
                    <PaginaPerfilBarbeiro />
                )}

                </div>
            </div>
        </>
    )
}

export default PaginaPainelBarbeiro