import "./PaginaServico.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PaginaServico = ({ gestor }) => {

  const [servicos, setServicos] = useState([])

  useEffect(() => {

    const BuscarServicos = async () => {

      try {
        const resp = await fetch(
          `http://localhost:8080/servicos`
        )

        const data = await resp.json()

        if (!resp.ok) {
          console.log(data)
        }

        setServicos(data)

      } catch (error) {
        console.log("error", error)
      }

    }

    BuscarServicos();
  }, [])

  return (
    <>
      <div className="pagina-servicos">

        {/*<!-- TOPO -->*/}

        <div className="topo-servicos">

          <div>
            <h1 className="titulo-servicos">
              Serviços & Preços
            </h1>

            <p className="subtitulo-servicos">
              Gerencie os serviços oferecidos e ajuste preços
            </p>
          </div>

          <div className="acoes-topo-servicos">


            <Link className="botao-ver-site-pagina-servicos"
              to={"/"}
            >
              <button className="botao-ver-site">
                Ver site
              </button>
            </Link>

            <div className="avatar-admin">
              {gestor?.nomeCompleto.charAt(0)}
            </div>

          </div>

        </div>

        {/*<!-- BOTOES -->*/}

        <div className="barra-acoes-servicos">

          <div className="quantidade-servicos">
            6 serviços
          </div>

          <div className="grupo-botoes-servicos">

            <button className="botao-novo-servico">
              + Novo Serviço
            </button>

          </div>

        </div>

        {/*<!-- TABELA -->*/}

        <div className="container-tabela-servicos">

          <table className="tabela-servicos">

            <thead>

              <tr>
                <th>Serviço</th>
                <th>Pontos</th>
                <th>Duração</th>
                <th>Preço</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>

            </thead>

            <tbody>

              {/*<!-- ITEM -->*/}


              {servicos.map((servicos) => (
                <tr key={servicos.id}>
                  <td >
                    <div className="informacoes-servico">
                      <div className="icone-servico">
                        ✂
                      </div>
                      <div>
                        <div className="titulo-item-servico">
                          {servicos.nomeServico}
                        </div>
                        <p className="descricao-servico">
                          {servicos.descricao}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>{servicos.pontos}</td>
                  <td>{servicos.tempoServico.substring(3, 5)} min</td>
                  <td className="valor-servico">
                    R$ {servicos.preco}
                  </td>
                  <td>
                    <span className="status-ativo">
                      Ativo
                    </span>
                  </td>
                  <td>
                    <div className="acoes-servico">
                      <button className="botao-editar">
                        ✏
                      </button>
                      <button className="botao-excluir">
                        🗑
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default PaginaServico