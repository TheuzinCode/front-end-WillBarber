import "./TodosMeusAgendamentos.css"

const TodosMeusAgendamentos = ({todosAgendamentos}) => {
  return (
    <>

      <div className="lista-agendamentos">

        {/* CARD */}
        {todosAgendamentos.map((agendamento) => (
          <div className="card-agendamento-meus-agendamentos-todos"
            key={agendamento.id}>
            <div className="lado-esquerdo-agendamento-meus-agendamento-todos">
              <div className="icone-servico-meus-agendamentos-todos">
                ✂
              </div>
              <div className="info-servico-meus-agendamentos-todos">
                <div className="titulo-servico-meus-agendamentos-todos">{agendamento.nomeServico}</div>
                <div className="barbeiro-servico-meus-agendamentos-todos">{agendamento.nomeBarbeiro}</div>
                <div className="informacoes-agendamento-todos">
                  <span className="data-agendamento-todos-todos">
                    {new Date(
                      agendamento.dataHora
                    ).toLocaleString("pt-BR")}
                  </span>
                  <span className={agendamento.statusAgendamento === "AGENDADO" ? "status-pendente-todos" : "status-confirmado-todos"}>
                    {agendamento.statusAgendamento}
                  </span>
                </div>
              </div>
            </div>
            <div className="lado-direito-agendamento-todos">
              <h1>R$ {agendamento.valorServico},00</h1>
              <div className="acoes-agendamento-todos">
                <button className="botao-reagendar-todos">
                  Reagendar
                </button>
                <button className="botao-cancelar-todos">
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

export default TodosMeusAgendamentos