import "./PaginaDashboard.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegCalendarCheck } from "react-icons/fa6";//calendario
import { GoPeople } from "react-icons/go"; //people
import { BsScissors } from "react-icons/bs"; //tesoura
import { ImPriceTag } from "react-icons/im"; //price
import { LiaMedalSolid } from "react-icons/lia"; //medalhas
import { MdOutlineAttachMoney } from "react-icons/md"; //icone $




const PaginaDashboard = ({ gestor }) => {

  const [agendamentos, setAgendamentos] = useState([])
  const [clientes, setClientes] = useState([])
  const [barbeiros, setBarbeiros] = useState([])
  const [servicos, setServicos] = useState([])
  const [recompensas, setRecompensas] = useState([])
  const [ranking, setRanking] = useState([])

  useEffect(() => {

    async function BuscarAgendamentos() {
      const resp = await fetch(
        `http://localhost:8080/willbarber/gestor/listar-todos-agendamentos`
      )

      const agendamentosOpt = await resp.json();

      if (!resp.ok) {
        console.log(resp)
        return;
      }

      setAgendamentos(agendamentosOpt)
    }

    BuscarAgendamentos();

    async function BuscarClientes() {
      const resp = await fetch(
        `http://localhost:8080/willbarber/listar-todos-Clientes`
      )

      const clientesOpt = await resp.json();

      if (!resp.ok) {
        console.log(resp)
        return;
      }

      setClientes(clientesOpt)
    }
    BuscarClientes();

    async function BuscarBarbeiros() {
      const resp = await fetch(
        `http://localhost:8080/willbarber/gestor/listar-todos-barbeiros`
      )

      const barbeirosOpt = await resp.json();


      if (!resp.ok) {
        console.log(resp)
        return;
      }

      setBarbeiros(barbeirosOpt)
    }
    BuscarBarbeiros();

    async function BuscarServicos() {
      const resp = await fetch(
        `http://localhost:8080/willbarber/gestor/listar-todos-servicos`
      )
      const servicosOpt = await resp.json();

      if (!resp.ok) {
        console.log(resp)
        return;
      }
      setServicos(servicosOpt)
    }
    BuscarServicos()

    async function BuscarRecompensas() {
      const resp = await fetch(
        `http://localhost:8080/willbarber/recompensas`
      )

      const recompensasOpt = await resp.json()

      if (!resp.ok) {
        console.log(resp)
        return;
      }
      setRecompensas(recompensasOpt)
    }

    BuscarRecompensas();

    async function RankingClientes() {
      const resp = await fetch(
        `http://localhost:8080/willbarber/ranking-clientes`
      )

      const rankingOpt = await resp.json()

      if (!resp.ok) {
        console.log(resp)
        return;
      }
      console.log(rankingOpt)
      setRanking(rankingOpt)
    }
    RankingClientes();

  }, [])



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
            <div className="icone-card amarelo"><FaRegCalendarCheck color="#fdab07" size={20} /></div>
            <h2>{agendamentos.length}</h2>
            <h3>Agendamentos</h3>
            <p> este mês</p>
          </div>
          <div className="card-dashboard">
            <div className="icone-card azul"><GoPeople color="#0755fd" size={20} /></div>
            <h2>{clientes.length}</h2>
            <h3>Clientes</h3>
            <p>cadastrados</p>
          </div>
          <div className="card-dashboard">
            <div className="icone-card verde"><BsScissors color="#07fd30" size={20} /></div>
            <h2>{barbeiros.length}</h2>
            <h3>Barbeiros</h3>
            <p>ativos</p>
          </div>
          <div className="card-dashboard">
            <div className="icone-card roxo"><ImPriceTag color="#9b07fd" size={20} /></div>
            <h2>{servicos.length}</h2>
            <h3>Serviços</h3>
            <p>disponíveis</p>
          </div>
          <div className="card-dashboard">
            <div className="icone-card vermelho"><LiaMedalSolid color="#fd2c07" size={24} /></div>
            <h2>{recompensas.length}</h2>
            <h3>Recompensas</h3>
            <p>ativas</p>
          </div>
          <div className="card-dashboard">
            <div className="icone-card verde"><MdOutlineAttachMoney color="#0ffd07" size={24} /></div>
            <h2>{servicos.length}</h2>
            <h3>Faturamento</h3>
            <p>total</p>
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
                  Recompensas
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

          <div className="lado-direito-dashboard">
            <div className="card-melhores-clientes-dashboard">
              <div className="topo-melhores-clientes-dashboard">
                <h2 className="titulo-secao-dashboard">
                  Melhores Clientes
                </h2>
                <span className="subtitulo-melhores-clientes-dashboard">
                  Top clientes
                </span>
              </div>
              <div className="lista-melhores-clientes-dashboard">
                {/* ITEM */}

                {ranking
                .slice(0, 10)
                .map((cliente) => (
                  <div
                    className="item-melhor-cliente-dashboard"
                    key={cliente.clienteId}
                  >
                    <div className="informacoes-melhor-cliente-dashboard">
                      <div className="avatar-melhor-cliente-dashboard">
                        {cliente.nomeCliente.charAt(0)}
                      </div>
                      <div>
                        <h3>
                          {cliente.nomeCliente}
                        </h3>
                      </div>
                    </div>
                    <div className="quantidade-agendamentos-dashboard">
                      <strong>
                        {cliente.quantidadeCortes}
                      </strong>
                      <span>
                        agendamentos
                      </span>

                    </div>
                  </div>
                ))}


              </div>
            </div>
          </div>





        </div>
      </div>
    </>
  )
}

export default PaginaDashboard