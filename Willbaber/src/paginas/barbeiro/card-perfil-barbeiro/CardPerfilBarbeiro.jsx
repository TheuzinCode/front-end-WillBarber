import "./CardPerfilBarbeiro.css"
const CardPerfilBarbeiro = () => {


    
    return (
        <>
            <div className="pagina-dashboard-barbeiro">

                {/* TOPO */}

                <div className="topo-dashboard-barbeiro-pagina-dashboard-barbeiro">
                    <div className="informacoes-barbeiro-pagina-dashboard-barbeiro">
                        <div className="container-foto-barbeiro-pagina-dashboard-barbeiro">
                            <img
                                src="/barbeiro.jpg"
                                alt="Barbeiro"
                                className="foto-barbeiro-pagina-dashboard-barbeiro"
                            />
                            <div className="status-online-pagina-dashboard-barbeiro"></div>
                        </div>

                        <div>
                            <span className="texto-barbeiro-pagina-dashboard-barbeiro">
                                BARBEIRO
                            </span>
                            <h1 className="nome-barbeiro-pagina-dashboard-barbeiro">
                                William Santos
                            </h1>
                            <p className="descricao-barbeiro-pagina-dashboard-barbeiro">
                                Corte Clássico & Barba • 8 anos de experiência
                            </p>
                        </div>
                    </div>
                    <div className="disponivel-dashboard-pagina-dashboard-barbeiro">
                        ● Disponível
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardPerfilBarbeiro