import "./CardPerfilBarbeiro.css"
import { useState, useEffect } from "react";

const CardPerfilBarbeiro = () => {

    const [barbeiro, setBarbeiro] = useState(null)

    useEffect(() => {





        async function BuscarBarbeiro() {

            const usersObj =
                localStorage.getItem(
                    "clientAuth"
                );

            if (!usersObj) return;

            const usersOpt =
                JSON.parse(usersObj);

            try {
                const resp = await fetch(
                    `http://localhost:8080/willbarber/barbeiro/meu-perfil/${usersOpt.id}`
                )

                const data = await resp.json()

                if (!resp.ok) {
                    console.log(resp)
                    return
                }
                setBarbeiro(data)
            } catch (error) {
                console.log(error);
            }

        }
        BuscarBarbeiro()


    }, [])

    if (!barbeiro) {
        return (
            <div className="loading">
                Carregando...
            </div>
        )
    }
    return (
        <>

            <div className="pagina-dashboard-barbeiro">

                {/* TOPO */}

                <div className="topo-dashboard-barbeiro-pagina-dashboard-barbeiro">
                    <div className="informacoes-barbeiro-pagina-dashboard-barbeiro">
                        <div className="container-foto-barbeiro-pagina-dashboard-barbeiro">
                            <img
                                src={`data:image/jpeg;base64,${barbeiro.imagem}`}
                                alt={barbeiro.nome}
                                className="foto-barbeiro-pagina-dashboard-barbeiro"
                            />
                            <div className="status-online-pagina-dashboard-barbeiro"></div>
                        </div>

                        <div>
                            <span className="texto-barbeiro-pagina-dashboard-barbeiro">
                                BARBEIRO
                            </span>
                            <h1 className="nome-barbeiro-pagina-dashboard-barbeiro">
                                {barbeiro.nome}
                            </h1>
                            <p className="descricao-barbeiro-pagina-dashboard-barbeiro">
                                • {barbeiro.descricao} •
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