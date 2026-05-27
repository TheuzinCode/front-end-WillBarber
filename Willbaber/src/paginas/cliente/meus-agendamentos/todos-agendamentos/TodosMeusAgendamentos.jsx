import "./TodosMeusAgendamentos.css"
import Swal from "sweetalert2";

const TodosMeusAgendamentos = ({ todosAgendamentos }) => {

  async function CancelarAgendamento(agendamentoId) {

    const body = "CANCELADO";
    try {
      const resp = await fetch(
        `http://localhost:8080/willbarber/agendamento/agendamentos/${agendamentoId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        }
      )

      if (!resp.ok) {
        const erro = await resp.text();
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: erro
        });

        return;
      }

      Swal.fire({
        icon: "success",
        title: "Cancelado com sucesso!",
        text: "Seu horário foi cancelado com sucesso.",
        confirmButtonColor: "#C9A646",
        background: "#111111",
        color: "#FFFFFF"
      });


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