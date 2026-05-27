import "./TodosMeusAgendamentos.css"

const TodosMeusAgendamentos = ({todosAgendamentos}) => {
  
  async function CancelarAgendamento(agendamentoId) {

    try {
        const resp = await fetch(
          ``
        )
    } catch (error) {
      console.error("Erro ao cancelar agendamento:", error);
    }
  }
  
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
                  <span className={
                    agendamento.statusAgendamento === "AGENDADO" 
                    ? "status-pendente-todos" 
                    : agendamento.statusAgendamento === "CANCELADO"
                      ? "status-cancelado-todos"
                      : "status-confirmado-todos"
                  }>
                    {agendamento.statusAgendamento}
                  </span>
                </div>
              </div>
            </div>
            <div className="lado-direito-agendamento-todos">
              <h1>R$ {agendamento.valorServico},00</h1>
              <div className="acoes-agendamento-todos">
                <button className="botao-cancelar-todos" 
                onClick={() => CancelarAgendamento(agendamento.id)}>
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