import "./CardPerfilRecompensas.css"

const CardPerfilRecompensas = () => {
    return (
        <>

            <div className="container-principal-card-perfil-recompensas">

                <div className="card-nivel-usuario-pagina-recompensas">
                    <div className="topo-card-nivel-pagina-recompensas">
                        <div className="avatar-usuario-pagina-recompensas">
                            T
                        </div>
                        <div className="informacoes-usuario-pagina-recompensas">
                            <div className="linha-nome-nivel-pagina-recompensas">
                                <h2 className="nome-usuario-pagina-recompensas">
                                    Teste
                                </h2>
                            </div>
                            <p className="texto-recompensa-pagina-recompensas">
                                Resgate recompensas exclusivas com seus pontos acumulados
                            </p>
                            <div className="container-pontos-pagina-recompensas">
                                <div className="bloco-pontos-pagina-recompensas">
                                    <h1 className="numero-pontos-pagina-recompensas">
                                        0
                                    </h1>
                                    <span className="texto-pontos-pagina-recompensas">
                                        PONTOS DISPONÍVEIS
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CardPerfilRecompensas