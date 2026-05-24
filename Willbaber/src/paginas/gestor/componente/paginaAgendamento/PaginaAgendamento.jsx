import "./PaginaAgendamento.css"
import { useState, useEffect } from "react";

const PaginaAgendamento = ({ gestor }) => {

  const [agendamentos, setAgendamentos] = useState([])

  useEffect(() => {

    async function buscarTodosAgendamentos() {

      try {
        const resp = await fetch(
          `http://localhost:8080/willbarber/gestor/listar-todos-agendamentos`
        )

        const data = await resp.json();

        if (!resp.ok) {
          console.log("error ao buscar os agendamentos")
          return
        }

        setAgendamentos(data);

      } catch (error) {
        console.log("erro ao buscar")
      }
    }

    buscarTodosAgendamentos();
  }, []);

  const totalAgendados = agendamentos.filter(
    (agendamento) =>
      agendamento.statusAgendamento === "AGENDADO"
  ).length;

  const totalFinalizado = agendamentos.filter(
    (agendamento) =>
      agendamento.statusAgendamento === "FINALIZADO"
  ).length;

  const totalCancelado = agendamentos.filter((agendamentos) =>
    agendamentos.statusAgendamento === "CANCELADOS").length

  return (
    <div className="pagina-agendamentos">

      {/*<!-- TOPO -->*/}

      <div className="topo-agendamentos">

        <div>
          <h1 className="titulo-agendamentos">
            Agendamentos
          </h1>

          <p className="subtitulo-agendamentos">
            Visão geral de todos os agendamentos
          </p>
        </div>

        <div className="acoes-topo-agendamentos">

          <button className="botao-ver-site">
            Ver site
          </button>

          <div className="avatar-admin">
            {gestor?.nomeCompleto.charAt(0)}
          </div>

        </div>

      </div>

      {/*<!-- FILTROS -->*/}

      <div className="container-filtros-agendamentos">

        <input
          type="text"
          className="input-pesquisa-agendamentos"
          placeholder="Buscar por cliente ou serviço..."
        />

        <select className="select-filtro-agendamentos">
          <option>Todos os barbeiros</option>
        </select>

        <select className="select-filtro-agendamentos">
          <option>Todos os status</option>
        </select>

      </div>

      <p className="texto-resultado-agendamentos">
        {agendamentos.length} agendamentos encontrados
      </p>

      {/*<!-- CARDS -->*/}

      <div className="container-cards-agendamentos">

        <div className="card-resumo-agendamentos">
          <h2>{agendamentos.length}</h2>
          <p>Total</p>
        </div>

        <div className="card-resumo-agendamentos azul">
          <h2>{totalAgendados}</h2>
          <p>Agendados</p>
        </div>

        <div className="card-resumo-agendamentos verde">
          <h2>{totalFinalizado}</h2>
          <p>Concluídos</p>
        </div>

        <div className="card-resumo-agendamentos vermelho">
          <h2>{totalCancelado}</h2>
          <p>Cancelados</p>
        </div>

      </div>

      {/*<!-- TABELA -->*/}

      <div className="container-tabela-agendamentos">
        <table className="tabela-agendamentos">
          <thead>

            <tr>
              <th>Cliente</th>
              <th>Barbeiro</th>
              <th>Serviço</th>
              <th>Data & Hora</th>
              <th>Pontos</th>
              <th>Status</th>
              <th>Valor</th>
            </tr>

          </thead>
          <tbody>

            {agendamentos.map((agendamento) => {
              return (
                <tr key={agendamento.id}>
                  <td >
                    <div className="cliente-tabela">
                      <div className="avatar-cliente">
                        {agendamento.nomeCliente.charAt(0)}
                      </div>
                      <span>
                        {agendamento.nomeCliente}
                      </span>
                    </div>
                  </td>
                  <td>{agendamento.nomeBarbeiro}</td>
                  <td>{agendamento.nomeServico}</td>
                  <td>{new Date(
                    agendamento.dataHora
                  ).toLocaleString("pt-BR")}</td>
                  <td>
                    <span className="bonus-cliente">
                      {agendamento.pontos}
                    </span>
                  </td>
                  <td>
                    <span className={agendamento.statusAgendamento === "FINALIZADO"
                      ? "status-concluido"
                      : agendamento.statusAgendamento === "CANCELADO"
                        ? "status-cancelado"
                        : "status-agendado"}>
                      {agendamento.statusAgendamento}
                    </span>
                  </td>
                  <td className="valor-tabela">
                    R$ {agendamento.precoServico},00
                  </td>
                </tr>
              )
            })}


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaginaAgendamento