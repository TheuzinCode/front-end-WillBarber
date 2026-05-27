import "./PaginaAgendaBarbeiro.css"
import { useState, useEffect } from "react";


const PaginaAgendaBarbeiro = () => {

  const [diaSelecionado, setDiaSelecionado] =
    useState(new Date());

  const [agendamentosDia, setAgendamentosDia] = useState([])

  const diasSemana = [];

  for (let i = -3; i <= 3; i++) {

    const data = new Date();

    data.setDate(
      data.getDate() + i
    );

    diasSemana.push(data);
  }

  function formatarDataBackend(data) {

    return data
      .toLocaleDateString("sv-SE");
  }

  async function buscarDataAgenda(dataEscolhida) {

    const usersObj =
      localStorage.getItem(
        "clientAuth"
      );

    if (!usersObj) return;

    const usersOpt =
      JSON.parse(usersObj);

    const dataFormatada =
      formatarDataBackend(
        dataEscolhida
      );

    const resp = await fetch(
      `http://localhost:8080/willbarber/barbeiro/${usersOpt.id}/listarAgedamentosDoDia?data=${dataFormatada}`
    );

    const data = await resp.json();

    if (!resp.ok) {

      console.log(resp);
      return;
    }

    setAgendamentosDia(data);
  }

  useEffect(() => {

    buscarDataAgenda(
      new Date()
    );

  }, []);

  return (
    <>
      <div className="pagina-agenda-barbeiro">

        <h1 className="titulo-agenda-pagina-agenda-barbeiro">
          Agenda Semanal
        </h1>

        {/* DIAS */}

        <div className="container-dias-pagina-agenda-barbeiro">

          {diasSemana.map((dia, index) => {
            const selecionado =
              dia.toDateString() ===
              diaSelecionado.toDateString();

            return (
              <button
                key={index}
                className={
                  selecionado
                    ? "card-dia-ativo-pagina-agenda-barbeiro"
                    : "card-dia-pagina-agenda-barbeiro"
                }

                onClick={() => {
                  setDiaSelecionado(dia);
                  buscarDataAgenda(dia);
                }}
              >
                <span>
                  {dia.toLocaleDateString(
                    "pt-BR",
                    {
                      weekday: "short"
                    }
                  )}
                </span>
                <h2>
                  {dia.toLocaleDateString(
                    "pt-BR",
                    {
                      day: "2-digit"
                    }
                  )}
                </h2>
              </button>
            )
          })}
        </div>

        {/* GRID */}

        <div className="grid-agendamentos-pagina-agenda-barbeiro">

          {/* CARD */}

          {agendamentosDia.map((agedamentoDoDia) => {
            return (
              <div className="card-agendamento-pagina-agenda-barbeiro">
                <div className="topo-card-agendamento-pagina-agenda-barbeiro">
                  <div className="informacoes-cliente-pagina-agenda-barbeiro">
                    <div className="avatar-cliente-pagina-agenda-barbeiro">
                     {agedamentoDoDia.nomeCliente.charAt(0)}
                    </div>
                    <div>
                      <h2 className="nome-cliente-pagina-agenda-barbeiro">
                         {agedamentoDoDia.nomeCliente}
                      </h2>
                      <p className="servico-cliente-pagina-agenda-barbeiro">
                        {agedamentoDoDia.nomeServico}
                      </p>
                    </div>
                  </div>
                  <div className="status-confirmado-pagina-agenda-barbeiro">
                   {agedamentoDoDia.statusAgendamento}
                  </div>
                </div>

                <div className="rodape-card-agendamento-pagina-agenda-barbeiro">
                  <span>
                    🕒  {agedamentoDoDia.dataHora.substring(11, 16)}
                  </span>
                  <span>
                    ✂ {agedamentoDoDia.duracao.substring(3, 5)} min
                  </span>
                </div>
              </div>
            )
          })}


        </div>
      </div>
    </>
  )
}

export default PaginaAgendaBarbeiro