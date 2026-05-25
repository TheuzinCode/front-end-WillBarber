import "./PaginaAgendaBarbeiro.css"

const PaginaAgendaBarbeiro = () => {
  return (
    <>
      <div className="pagina-agenda-barbeiro">

        <h1 className="titulo-agenda-pagina-agenda-barbeiro">
          Agenda Semanal
        </h1>

        {/* DIAS */}

        <div className="container-dias-pagina-agenda-barbeiro">

          <div className="card-dia-pagina-agenda-barbeiro">
            <span>Seg</span>
            <h2>30</h2>
          </div>

          <div className="card-dia-pagina-agenda-barbeiro">
            <span>Ter</span>
            <h2>31</h2>
          </div>

          <div className="card-dia-pagina-agenda-barbeiro">
            <span>Qua</span>
            <h2>01</h2>
          </div>

          <div className="card-dia-ativo-pagina-agenda-barbeiro">
            <span>Qui</span>
            <h2>02</h2>
          </div>

          <div className="card-dia-pagina-agenda-barbeiro">
            <span>Sex</span>
            <h2>03</h2>
          </div>

          <div className="card-dia-pagina-agenda-barbeiro">
            <span>Sáb</span>
            <h2>04</h2>
          </div>

        </div>

        {/* GRID */}

        <div className="grid-agendamentos-pagina-agenda-barbeiro">

          {/* CARD */}

          <div className="card-agendamento-pagina-agenda-barbeiro">

            <div className="topo-card-agendamento-pagina-agenda-barbeiro">

              <div className="informacoes-cliente-pagina-agenda-barbeiro">

                <div className="avatar-cliente-pagina-agenda-barbeiro">
                  M
                </div>

                <div>

                  <h2 className="nome-cliente-pagina-agenda-barbeiro">
                    Marcos Oliveira
                  </h2>

                  <p className="servico-cliente-pagina-agenda-barbeiro">
                    Corte + Barba
                  </p>

                </div>

              </div>

              <div className="status-confirmado-pagina-agenda-barbeiro">
                Confirmado
              </div>

            </div>

            <div className="rodape-card-agendamento-pagina-agenda-barbeiro">

              <span>
                🕒 09:00
              </span>

              <span>
                ✂ 55 min
              </span>

            </div>

          </div>

          {/* CARD */}

          <div className="card-agendamento-pagina-agenda-barbeiro">

            <div className="topo-card-agendamento-pagina-agenda-barbeiro">

              <div className="informacoes-cliente-pagina-agenda-barbeiro">

                <div className="avatar-cliente-pagina-agenda-barbeiro">
                  J
                </div>

                <div>

                  <h2 className="nome-cliente-pagina-agenda-barbeiro">
                    João Pedro
                  </h2>

                  <p className="servico-cliente-pagina-agenda-barbeiro">
                    Corte de Cabelo
                  </p>

                </div>

              </div>

              <div className="status-confirmado-pagina-agenda-barbeiro">
                Confirmado
              </div>

            </div>

            <div className="rodape-card-agendamento-pagina-agenda-barbeiro">

              <span>
                🕒 10:00
              </span>

              <span>
                ✂ 30 min
              </span>

            </div>

          </div>

          {/* CARD */}

          <div className="card-agendamento-pagina-agenda-barbeiro">

            <div className="topo-card-agendamento-pagina-agenda-barbeiro">

              <div className="informacoes-cliente-pagina-agenda-barbeiro">

                <div className="avatar-cliente-pagina-agenda-barbeiro">
                  A
                </div>

                <div>

                  <h2 className="nome-cliente-pagina-agenda-barbeiro">
                    André Costa
                  </h2>

                  <p className="servico-cliente-pagina-agenda-barbeiro">
                    Barba
                  </p>

                </div>

              </div>

              <div className="status-confirmado-pagina-agenda-barbeiro">
                Confirmado
              </div>

            </div>

            <div className="rodape-card-agendamento-pagina-agenda-barbeiro">

              <span>
                🕒 11:00
              </span>

              <span>
                ✂ 25 min
              </span>

            </div>

          </div>

          {/* CARD */}

          <div className="card-agendamento-pagina-agenda-barbeiro">

            <div className="topo-card-agendamento-pagina-agenda-barbeiro">

              <div className="informacoes-cliente-pagina-agenda-barbeiro">

                <div className="avatar-cliente-pagina-agenda-barbeiro">
                  R
                </div>

                <div>

                  <h2 className="nome-cliente-pagina-agenda-barbeiro">
                    Rodrigo Lima
                  </h2>

                  <p className="servico-cliente-pagina-agenda-barbeiro">
                    Corte + Barba
                  </p>

                </div>

              </div>

              <div className="status-pendente-pagina-agenda-barbeiro">
                Pendente
              </div>

            </div>

            <div className="rodape-card-agendamento-pagina-agenda-barbeiro">

              <span>
                🕒 14:00
              </span>

              <span>
                ✂ 55 min
              </span>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default PaginaAgendaBarbeiro