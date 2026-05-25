import "./PaginaRecompensas.css"
import CardPerfilRecompensas from "./card-perfil-recompensas/CardPerfilRecompensas"
import ItensRecompensas from "./itens-recompensas/ItensRecompensas"
import Cabecalho from "../../../componentes/cabecalho/cabecalho"

const PaginaRecompensas = () => {
    return (
        <>

            <Cabecalho estatico={true} />
            <div className="cor-de-fundo-pagina-recompensas">
                <div className="container-principal-pagina-recompensas">
                    <CardPerfilRecompensas />

                    <ItensRecompensas />
                </div>
            </div>


        </>
    )
}

export default PaginaRecompensas