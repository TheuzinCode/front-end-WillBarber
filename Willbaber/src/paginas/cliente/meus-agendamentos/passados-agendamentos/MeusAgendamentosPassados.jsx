import "./MeusAgendamentosPassados.css"

const MeusAgendamentosPassados = ({ agendamentosPassados }) => {

    return (
        <>
            <div className="lista-agendamentos">

                {/* CARD */}
                {agendamentosPassados.map((agendamento) => (
                    <div className="card-agendamento-meus-agendamentos-passados"
                        key={agendamento.id}>
                        <div className="lado-esquerdo-agendamento-meus-agendamentos-passados">
                            <div className="icone-servico-meus-agendamentos-passados">
                                ✂
                            </div>
                            <div className="info-servico-meus-agendamentos-passados">
                                <div className="titulo-servico-meus-agendamentos-passados">{agendamento.nomeServico}</div>
                                <div className="barbeiro-servico-meus-agendamentos-passados">{agendamento.nomeBarbeiro}</div>
                                <div className="informacoes-agendamento-passados">
                                    <span className="data-agendamento-passados">
                                        {new Date(
                                            agendamento.dataHora
                                        ).toLocaleString("pt-BR")}
                                    </span>
                                    <span className="status-pendente-passados">
                                        {agendamento.statusAgendamento}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="lado-direito-agendamento-passados">
                            <h1>R$ {agendamento.valorServico},00</h1>
                            <div className="acoes-agendamento-passados">
                                <button className="botao-reagendar-passados">
                                    Reagendar
                                </button>
                                <button className="botao-cancelar-passados">
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

export default MeusAgendamentosPassados