import "./PaginaRecompensas.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalRecompensa from "../modalRecompensas/ModalRecompensa";

const PaginaRecompensas = ({ gestor }) => {

    const [recompensas, setRecompensas] = useState([])
    const [modalAberto, setModalAberto] = useState(false);
    const [recompensaSelecionado, setRecompensaSelecionado] = useState(null);

    useEffect(() => {

        async function BuscarRecompensas() {

            try {
                const resp = await fetch(
                    `http://localhost:8080/willbarber/recompensas`
                )

                const data = await resp.json();

                console.log(data)
                if (!resp.ok) {
                    console.log(resp);
                    return
                }

                setRecompensas(data)

            } catch (error) {
                console.log("error: ", error)
            }
        }

        BuscarRecompensas();

    }, [])

    return (
        <>
            <div className="pagina-recompensa-adm">

                <div className="topo-servicos">

                    <div>
                        <h1 className="titulo-pagina-recompensa-adm">
                            Catálogo de Recompensas
                        </h1>

                        <p className="subtitulo-servicos">
                            Gerencie recompensas
                        </p>
                    </div>

                    <div className="acoes-topo-servicos">


                        <Link className="botao-ver-site-pagina-servicos"
                            to={"/"}
                        >
                            <button className="botao-ver-site">
                                Ver site
                            </button>
                        </Link>

                        <div className="avatar-admin">
                            {gestor?.nomeCompleto.charAt(0)}
                        </div>

                    </div>

                </div>


                <div className="topo-pagina-recompensa-adm">

                    <h1 className="quantidade-recompensas-pagina-recompensas">
                        {recompensas.length} recompensas
                    </h1>

                    <button className="botao-nova-recompensa-pagina-recompensa-adm"
                        onClick={() => {
                            setRecompensaSelecionado(null);
                            setModalAberto(true);
                        }
                        }
                    >
                        + Nova Recompensa
                    </button>

                </div>


                <div className="grid-cards-pagina-recompensa-adm">

                    {/* CARD */}
                    {recompensas.map((recompensa) => {
                        return (
                            <div className="card-recompensa-pagina-recompensa-adm"
                                key={recompensa.id}>
                                <div className="topo-card-pagina-recompensa-adm">
                                    <div className="icone-card-pagina-recompensa-adm">
                                        ♂
                                    </div>
                                    <div className="acoes-card-pagina-recompensa-adm">
                                        <button className="botao-editar-pagina-recompensa-adm"
                                            onClick={() => {
                                                setModalAberto(true)
                                                setRecompensaSelecionado(recompensa)
                                            }}
                                        >
                                            ✎
                                        </button>
                                    </div>
                                </div>
                                <div className="conteudo-card-pagina-recompensa-adm">
                                    <h2 className="titulo-card-pagina-recompensa-adm">
                                        {recompensa.nomeRecompensa}
                                    </h2>
                                    <p className="descricao-card-pagina-recompensa-adm">
                                        {recompensa.descricao}.
                                    </p>
                                </div>
                                <div className="rodape-card-pagina-recompensa-adm">
                                    <div className="pontos-card-pagina-recompensa-adm">
                                        {recompensa.pontos} pts
                                    </div>
                                    <div className="status-card-pagina-recompensa-adm">
                                        Ativa
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {modalAberto && (
                <ModalRecompensa
                    fecharModal={() => setModalAberto(false)}
                    recompensa={recompensaSelecionado}
                />
            )}
        </>
    )
}

export default PaginaRecompensas