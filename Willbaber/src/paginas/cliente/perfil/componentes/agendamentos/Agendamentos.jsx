import "./Agendamentos.css";
import { useEffect, useState } from "react";

const Agendamentos = ({ id }) => {

    const [agendamentos, setAgendamentos] = useState([]);

    useEffect(() => {

        async function carregarAgendamentos() {

            try {

                const resp = await fetch(
                    `http://localhost:8080/willbarber/agendamentos/${id}/meus-agendamentos-concluidos`
                );

                if (!resp.ok) {
                    console.log("Erro ao carregar agendamentos");
                    return;
                }

                const data = await resp.json();

                setAgendamentos(data);

            } catch (error) {
                console.log(error);
            }
        }

        carregarAgendamentos();

    }, [id]);

    return (
        <>

            <h2 className="secao-titulo">
                Histórico de Atendimentos
            </h2>

            <div className="historico">

                {agendamentos.map((agendamento) => (

                    <div className="item" key={agendamento.id}>

                        <div className="item-esquerda">

                            <div className="icone">
                                <i className="fa-solid fa-scissors"></i>
                            </div>

                            <div className="servico">

                                <h3>
                                    {agendamento.nomeServico}

                                    <span className="fidelidade">
                                        <i className="fa-solid fa-medal"></i>
                                        +1 fidelidade
                                    </span>

                                </h3>

                                <p>
                                    com {agendamento.nomeBarbeiro}
                                </p>

                                <div className="infos">

                                    <span>
                                        {new Date(
                                            agendamento.dataHora
                                        ).toLocaleString("pt-BR")}
                                    </span>

                                    <span className="status">
                                        {agendamento.statusAgendamento}
                                    </span>

                                </div>

                            </div>

                        </div>

                        <div className="item-direita">

                            <h2 className="preco">
                                R$ {agendamento.valorServico},00
                            </h2>

                            <button className="btn-avaliar">
                                <i className="fa-regular fa-star"></i>
                                Avaliar
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </>
    );
};

export default Agendamentos;