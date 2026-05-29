import "./MeusAgendamentosProximo.css"

const MeusAgendamentosProximo = ({ agendamentosFuturos }) => {

    return (
        <>
            <div className="lista-agendamentos">

                {/* CARD */}
                {agendamentosFuturos.map((agendamento) => (
                    <div className="card-agendamento-meus-agendamentos-futuros"
                        key={agendamento.id}>
                        <div className="lado-esquerdo-agendamento-meus-agendamento-futuros">
                            <div className="icone-servico-meus-agendamentos-futuros">
                                ✂
                            </div>
                            <div className="info-servico-meus-agendamentos-futuros">
                                <div className="titulo-servico-meus-agendamentos-futuros">{agendamento.nomeServico}</div>
                                <div className="barbeiro-servico-meus-agendamentos-futuros">{agendamento.nomeBarbeiro}</div>
                                <div className="informacoes-agendamento-futuros">
                                    <span className="data-agendamento-futuros-futuros">
                                        {new Date(
                                            agendamento.dataHora
                                        ).toLocaleString("pt-BR")}
                                    </span>
                                    <span className="status-pendente-futuros">
                                        {agendamento.statusAgendamento}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="lado-direito-agendamento-futuros">
                            <h1>R$ {agendamento.valorServico},00</h1>
                            <div className="acoes-agendamento-futuros">
                                <button className="botao-cancelar-futuros">
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default MeusAgendamentosProximo