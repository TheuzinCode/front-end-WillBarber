import "./PaginaDashboardBarbeiro.css"
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const PaginaDashboardBarbeiro = () => {

  const [agendamentosDia, setAgendamentosDia] = useState([])

  const hoje =
    new Date().toISOString().split("T")[0];

    const pendentesHoje =
    agendamentosDia.filter(
        a => a.status === "AGENDADO"
    ).length;

    const receitaHoje =
    agendamentosDia.reduce(
        (total, agendamentosDia) =>
            total + agendamentosDia.preco,
        0
    );
  useEffect(() => {

    const hoje =
      new Date().toISOString().split("T")[0];

    async function buscarAgendamentoDia() {

      const usersObj =
        localStorage.getItem(
          "clientAuth"
        );

      if (!usersObj) return;

      const usersOpt =
        JSON.parse(usersObj);

      const resp = await fetch(
        `http://localhost:8080/willbarber/barbeiro/${usersOpt.id}/listarAgedamentosDoDia?data=${hoje}`
      )

      const data = await resp.json();

      if (!resp.ok) {
        console.log(resp)
        return
      }
      console.log(data)

      setAgendamentosDia(data)
    }
    buscarAgendamentoDia()
  }, [])

  return (
    <>
      {/* CARDS */}

      <div className="grid-cards-dashboard-pagina-dashboard-barbeiro">
        <div className="card-dashboard-pagina-dashboard-barbeiro">
          <div className="icone-card-pagina-dashboard-barbeiro">
            📅
          </div>
          <h2 className="numero-card-pagina-dashboard-barbeiro">
            {agendamentosDia.length}
          </h2>
          <p className="texto-card-pagina-dashboard-barbeiro">
            Hoje • agendamentos
          </p>
        </div>

        <div className="card-dashboard-pagina-dashboard-barbeiro">
          <div className="icone-card-amarelo-pagina-dashboard-barbeiro">
            🕒
          </div>
          <h2 className="numero-card-amarelo-pagina-dashboard-barbeiro">
            {pendentesHoje}
          </h2>
          <p className="texto-card-pagina-dashboard-barbeiro">
            Pendentes • aguardando
          </p>
        </div>

        <div className="card-dashboard-pagina-dashboard-barbeiro">
          <div className="icone-card-pagina-dashboard-barbeiro">
            💰
          </div>
          <h2 className="numero-card-pagina-dashboard-barbeiro">
            R$ {receitaHoje}
          </h2>
          <p className="texto-card-pagina-dashboard-barbeiro">
            Receita Hoje • estimado
          </p>
        </div>

      </div>

      {/* CONTEUDO */}

      <div className="layout-conteudo-dashboard-pagina-dashboard-barbeiro">

        {/* AGENDA */}

        <div>
          <h1 className="titulo-agenda-pagina-dashboard-barbeiro">
            Agenda de Hoje — {new Date(hoje).toLocaleDateString("pt-BR")}
          </h1>

          {/* CARD */}

          {agendamentosDia.map((agendamentoDia) => {
            return (
              <div className="card-agendamento-pagina-dashboard-barbeiro">
                <div className="horario-agendamento-pagina-dashboard-barbeiro">
                  {new Date(
                    agendamentoDia.dataHora
                  ).toLocaleTimeString(
                    "pt-BR",
                    {
                      hour: "2-digit",
                      minute: "2-digit"
                    }
                  )}
                </div>
                <div className="linha-agendamento-pagina-dashboard-barbeiro"></div>
                <div className="avatar-agendamento-pagina-dashboard-barbeiro">
                  {agendamentoDia.nomeCliente.charAt(0)}
                </div>
                <div className="informacoes-agendamento-pagina-dashboard-barbeiro">
                  <h2>
                    {agendamentoDia.nomeCliente}
                  </h2>
                  <p>
                    {agendamentoDia.nomeServico} • {agendamentoDia.duracao.substring(3, 5)} min
                  </p>
                </div>
                <div className="status-confirmado-pagina-dashboard-barbeiro">
                  {agendamentoDia.statusAgendamento}
                </div>
                <div className="seta-agendamento-pagina-dashboard-barbeiro">
                  ›
                </div>
              </div>
            )
          })}

        </div>

      </div>
    </>
  )
}

export default PaginaDashboardBarbeiro