import "./PaginaDashboardBarbeiro.css"


const PaginaDashboardBarbeiro = () => {
  return (
    <>
      {/* CARDS */}

      <div className="grid-cards-dashboard-pagina-dashboard-barbeiro">

        <div className="card-dashboard-pagina-dashboard-barbeiro">

          <div className="icone-card-pagina-dashboard-barbeiro">
            📅
          </div>

          <h2 className="numero-card-pagina-dashboard-barbeiro">
            6
          </h2>

          <p className="texto-card-pagina-dashboard-barbeiro">
            Hoje • agendamentos
          </p>

        </div>

        <div className="card-dashboard-pagina-dashboard-barbeiro">

          <div className="icone-card-verde-pagina-dashboard-barbeiro">
            ✔
          </div>

          <h2 className="numero-card-verde-pagina-dashboard-barbeiro">
            5
          </h2>

          <p className="texto-card-pagina-dashboard-barbeiro">
            Confirmados • clientes
          </p>

        </div>

        <div className="card-dashboard-pagina-dashboard-barbeiro">

          <div className="icone-card-amarelo-pagina-dashboard-barbeiro">
            🕒
          </div>

          <h2 className="numero-card-amarelo-pagina-dashboard-barbeiro">
            1
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
            R$ 325
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
            Agenda de Hoje — 02/04/2026
          </h1>

          {/* CARD */}

          <div className="card-agendamento-pagina-dashboard-barbeiro">

            <div className="horario-agendamento-pagina-dashboard-barbeiro">
              09:00
            </div>

            <div className="linha-agendamento-pagina-dashboard-barbeiro"></div>

            <div className="avatar-agendamento-pagina-dashboard-barbeiro">
              M
            </div>

            <div className="informacoes-agendamento-pagina-dashboard-barbeiro">

              <h2>
                Marcos Oliveira
              </h2>

              <p>
                Corte + Barba • 55 min
              </p>

            </div>

            <div className="status-confirmado-pagina-dashboard-barbeiro">
              Confirmado
            </div>

            <div className="seta-agendamento-pagina-dashboard-barbeiro">
              ›
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaginaDashboardBarbeiro