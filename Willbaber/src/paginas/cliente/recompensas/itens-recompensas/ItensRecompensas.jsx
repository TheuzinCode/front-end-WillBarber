import "./ItensRecompensas.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ItensRecompensas = () => {

    const [cliente, setCliente] = useState(null);
    const [recompensas, setRecompensas] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        const userStorage = localStorage.getItem("clientAuth");
        if (userStorage) {
            setCliente(JSON.parse(userStorage));
        }


        async function BuscarRecompenas() {

            const resp = await fetch(
                `http://localhost:8080/willbarber/recompensas`
            )

            const data = await resp.json()

            if (!resp.ok) {
                console.log(error)
                return;
            }

            setRecompensas(data);

        }
        BuscarRecompenas();
    }, [])

    function selecionarRecompensa(recompensa) {

        localStorage.setItem(
            "recompensaSelecionada",
            JSON.stringify(recompensa)
        );

        navigate("/novo-agendamento");
    }

    return (
        <>
            {/* TOPO */}

            <div className="topo-recompensas-pagina-recompensas">

                <h1>
                    Recompensas Disponíveis
                </h1>

                <span>
                    {recompensas.length} recompensas
                </span>

            </div>

            {/* GRID */}

            <div className="grid-recompensas-pagina-recompensas">

                {/* CARD */}

                {recompensas.map((recompensa) => {

                    const faltam = Math.max(
                        recompensa.pontos - cliente?.pontos,
                        0
                    );

                    const podeResgatar = faltam === 0;

                    return (
                        <div className="card-recompensa-pagina-recompensas"
                            key={recompensa.id}>
                            <div className="icone-e-pontos-pagina-recompensas">
                                <div className="icone-recompensa-pagina-recompensas">
                                    ✂
                                </div>
                                <div>
                                    <div className="pontos-recompensa-pagina-recompensas">
                                        {recompensa.pontos}
                                    </div>
                                    <div className="descricao-recompensa-pagina-recompensas">
                                        PONTOS
                                    </div>
                                </div>
                            </div>
                            <div className="topo-recompensa-pagina-recompensas">
                                <h2>
                                    {recompensa.nomeRecompensa}
                                </h2>
                            </div>
                            <p className="descricao-recompensa-pagina-recompensas">
                                {recompensa.descricao}
                            </p>
                            <div className="rodape-card-recompensa-pagina-recompensas">
                                <div className="barra-recompensa-pagina-recompensas">
                                    <div className="progresso-recompensa-pagina-recompensas"></div>
                                </div>
                                <div className="linha-progresso-recompensa-pagina-recompensas">
                                    <span>

                                    </span>
                                    <span>
                                        Faltam {faltam < 0 ? 0 : faltam} pts
                                    </span>
                                </div>
                                <button
                                    className={
                                        podeResgatar
                                            ? "botao-recompensa-pagina-recompensas"
                                            : "botao-recompensa-bloqueado-pagina-recompensas"
                                    }

                                    disabled={!podeResgatar}
                                    onClick={() =>
                                        selecionarRecompensa(recompensa)
                                    }
                                >

                                    {podeResgatar
                                        ? "Selecionar"
                                        : `Faltam ${faltam} pontos`
                                    }

                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ItensRecompensas