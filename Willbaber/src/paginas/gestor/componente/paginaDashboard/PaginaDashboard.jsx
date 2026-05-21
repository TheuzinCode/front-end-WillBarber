import "./PaginaDashboard.css"

const PaginaDashboard = ({gestor}) => {
  return (
    <>
      <div className="pagina-dashboard">
        <div className="topo-dashboard">
          <div>
            <h1 className="titulo-dashboard">
              Dashboard
            </h1>
            <p className="subtitulo-dashboard">
              Visão geral do sistema Will Barber
            </p>
          </div>
          <div className="acoes-topo-dashboard">
            <button className="botao-ver-site">
              Ver site
            </button>
            <div className="avatar-admin">
              {gestor?.nomeCompleto.charAt(0)}
            </div>
          </div>
        </div>

        <div className="container-cards-dashboard">
          <div className="card-dashboard">
            <div className="icone-card amarelo"></div>
            <h2>10</h2>
            <h3>Agendamentos</h3>
            <p>+94 este mês</p>
          </div>
          <div className="card-dashboard">
            <div className="icone-card azul"></div>
            <h2>312</h2>
            <h3>Clientes</h3>
            <p>cadastrados</p>
          </div>
          <div className="card-dashboard">
            <div className="icone-card verde"></div>
            <h2>3</h2>
            <h3>Barbeiros</h3>
            <p>ativos</p>
          </div>
          <div className="card-dashboard">
            <div className="icone-card roxo"></div>
            <h2>6</h2>
            <h3>Serviços</h3>
            <p>disponíveis</p>
          </div>
        </div>

        <div className="layout-inferior-dashboard">
          <div className="lado-esquerdo-dashboard">
            <div className="card-grande-dashboard">
              <h2 className="titulo-secao-dashboard">
                Ações Rápidas
              </h2>
              <div className="grid-acoes-dashboard">
                <button className="botao-acao-dashboard">
                  Cadastrar Barbeiro
                </button>
                <button className="botao-acao-dashboard">
                  Novo Serviço
                </button>
                <button className="botao-acao-dashboard">
                  Alterar Preços
                </button>
                <button className="botao-acao-dashboard">
                  Bônus Clientes
                </button>
                <button className="botao-acao-dashboard">
                  Agendamentos
                </button>
              </div>
            </div>

            <div className="card-grande-dashboard">
              <div className="topo-tabela-dashboard">
                <h2 className="titulo-secao-dashboard">
                  Agendamentos Recentes
                </h2>
                <button className="botao-ver-todos">
                  Ver todos
                </button>
              </div>

              <table className="tabela-dashboard">
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Barbeiro</th>
                    <th>Serviço</th>
                    <th>Data</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Carlos Silva</td>
                    <td>William</td>
                    <td>Corte + Barba</td>
                    <td>2026-04-10 09:00</td>
                    <td>
                      <span className="status-confirmado">
                        Confirmado
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Marcos Oliveira</td>
                    <td>Diego</td>
                    <td>Corte de Cabelo</td>
                    <td>2026-04-10 10:00</td>
                    <td>
                      <span className="status-confirmado">
                        Confirmado
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaginaDashboard