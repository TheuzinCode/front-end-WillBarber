import "./PaginaAgendamento.css"

const PaginaAgendamento = ({gestor}) => {
  return (
    <div class="pagina-agendamentos">

      {/*<!-- TOPO -->*/}

      <div class="topo-agendamentos">

        <div>
          <h1 class="titulo-agendamentos">
            Agendamentos
          </h1>

          <p class="subtitulo-agendamentos">
            Visão geral de todos os agendamentos
          </p>
        </div>

        <div class="acoes-topo-agendamentos">

          <button class="botao-ver-site">
            Ver site
          </button>

          <div class="avatar-admin">
            {gestor?.nomeCompleto.charAt(0)}
          </div>

        </div>

      </div>

      {/*<!-- FILTROS -->*/}

      <div class="container-filtros-agendamentos">

        <input
          type="text"
          class="input-pesquisa-agendamentos"
          placeholder="Buscar por cliente ou serviço..."
        />

        <select class="select-filtro-agendamentos">
          <option>Todos os barbeiros</option>
        </select>

        <select class="select-filtro-agendamentos">
          <option>Todos os status</option>
        </select>

      </div>

      <p class="texto-resultado-agendamentos">
        10 agendamentos encontrados
      </p>

      {/*<!-- CARDS -->*/}

      <div class="container-cards-agendamentos">

        <div class="card-resumo-agendamentos">
          <h2>10</h2>
          <p>Total</p>
        </div>

        <div class="card-resumo-agendamentos azul">
          <h2>2</h2>
          <p>Confirmados</p>
        </div>

        <div class="card-resumo-agendamentos verde">
          <h2>6</h2>
          <p>Concluídos</p>
        </div>

        <div class="card-resumo-agendamentos vermelho">
          <h2>1</h2>
          <p>Cancelados</p>
        </div>

      </div>

      {/*<!-- TABELA -->*/}

      <div class="container-tabela-agendamentos">

        <table class="tabela-agendamentos">

          <thead>

            <tr>
              <th>Cliente</th>
              <th>Barbeiro</th>
              <th>Serviço</th>
              <th>Data & Hora</th>
              <th>Bônus</th>
              <th>Status</th>
              <th>Valor</th>
            </tr>

          </thead>

          <tbody>

            <tr>

              <td>

                <div class="cliente-tabela">

                  <div class="avatar-cliente">
                    C
                  </div>

                  <span>
                    Carlos Silva
                  </span>

                </div>

              </td>

              <td>William</td>

              <td>Corte + Barba</td>

              <td>2026-04-10 09:00</td>

              <td>
                <span class="bonus-cliente">
                  Conta
                </span>
              </td>

              <td>
                <span class="status-confirmado">
                  Confirmado
                </span>
              </td>

              <td class="valor-tabela">
                R$ 70
              </td>

            </tr>

            <tr>

              <td>

                <div class="cliente-tabela">

                  <div class="avatar-cliente">
                    M
                  </div>

                  <span>
                    Marcos Oliveira
                  </span>

                </div>

              </td>

              <td>Diego</td>

              <td>Corte de Cabelo</td>

              <td>2026-04-10 10:00</td>

              <td>
                <span class="bonus-cliente">
                  Conta
                </span>
              </td>

              <td>
                <span class="status-confirmado">
                  Confirmado
                </span>
              </td>

              <td class="valor-tabela">
                R$ 45
              </td>

            </tr>

            <tr>

              <td>

                <div class="cliente-tabela">

                  <div class="avatar-cliente">
                    J
                  </div>

                  <span>
                    João Pedro
                  </span>

                </div>

              </td>

              <td>William</td>

              <td>Barba</td>

              <td>2026-04-10 11:00</td>

              <td>
                <span class="bonus-cliente">
                  Conta
                </span>
              </td>

              <td>
                <span class="status-concluido">
                  Concluído
                </span>
              </td>

              <td class="valor-tabela">
                R$ 35
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default PaginaAgendamento