import "./PaginaBarbeiro.css"
import ModalBarbeiro from "../modalBarbeiro/ModalBarbeiro";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";



const PaginaBarbeiro = ({ gestor }) => {
  const [modalAberto, setModalAberto] = useState(false);
  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState(null)
  const [barbeiros, setBarbeiros] = useState([])

  useEffect(() => {

    async function buscarBarbeiros() {
      try {
        const resp = await fetch(
          `http://localhost:8080/willbarber/gestor/listar-todos-barbeiros`
        )

        const data = await resp.json()

        if (!resp.ok) {
          console.log("error", data)
          return
        }



        setBarbeiros(data)
      } catch (error) {
        console.log("error na requisição", error)
      }
    }

    buscarBarbeiros();

  }, [])


  async function deletarbarbeiro(barbeiro) {

    try {
      const resp = await fetch(
        `http://localhost:8080/willbarber/gestor/barbeiros/deletar-barbeiro/${barbeiro.id}`,
        {
          method: "DELETE"
        }
      )

      if (!resp.ok) {
        const data = await resp.json()
        console.log("error", data)
        return
      }

      Swal.fire({
        icon: "success",
        title: "Barbeiro excluído com sucesso",
        confirmButtonColor: "#C9A646",
        background: "#111111",
        color: "#FFFFFF"
      });
    } catch (error) {
      console.log("error na requisição", error)

      Swal.fire({
        icon: "error",
        title: "Erro ao excluir barbeiro",
        text: error.message,
        confirmButtonColor: "#C9A646",
        background: "#111111",
        color: "#FFFFFF"
      });
    }

  }

  return (
    <>

      <div className="pagina-barbeiros">

        {/*<!-- TOPO -->*/}

        <div className="topo-barbeiros">
          <div>
            <h1 className="titulo-barbeiros">
              Gestão de Barbeiros
            </h1>
            <p className="subtitulo-barbeiros">
              Cadastre e gerencie os profissionais da barbearia
            </p>
          </div>
          <div className="acoes-topo-barbeiros">
            <button className="botao-ver-site">
              Ver site
            </button>
            <div className="avatar-admin">
              {gestor?.nomeCompleto?.charAt(0)}
            </div>
          </div>
        </div>

        {/*<!-- TOPO -->*/}

        <div className="barra-superior-barbeiros">
          <div className="informacoes-barbeiros">
            <span className="quantidade-barbeiros">
              {barbeiros.length} barbeiros
            </span>
          </div>
          <button
            className="botao-cadastrar-barbeiro"
            onClick={() => {
              setModalAberto(true);
              setBarbeiroSelecionado(null);
            }}
          >
            + Cadastrar Barbeiro
          </button>
        </div>

        {/*<!-- TOPO -->*/}

        <div className="grid-barbeiros">

          {/*<!-- CARD -->*/}


          {barbeiros.map((barbeiro) => {
            return (
              <div className="card-barbeiro" key={barbeiro.id}>
                <div className="topo-card-barbeiro">
                  <div className="informacoes-principais-barbeiro">
                    <img
                      className="foto-barbeiro"
                      src={`data:image/jpeg;base64,${barbeiro.imagem}`}
                      alt={barbeiro.nome}
                    />
                    <div>
                      <h2 className="nome-barbeiro">
                        {barbeiro.nome}
                      </h2>
                      <p className="especialidade-barbeiro">
                        {barbeiro.descricao}
                      </p>
                      <div className="detalhes-barbeiro">
                        <span>☏ {barbeiro.telefone}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="linha-dias">
                  <div className="status-online"></div>
                  <div className="dias-trabalho">
                    <span>Seg</span>
                    <span>Ter</span>
                    <span>Qua</span>
                    <span>Qui</span>
                    <span>Sex</span>
                    <span>Sáb</span>
                  </div>
                </div>
                <p className="descricao-barbeiro">
                  {barbeiro.descricao}
                </p>
                <div className="rodape-card-barbeiro">
                  <button className="botao-editar-barbeiro"
                    onClick={() => {
                      setBarbeiroSelecionado(barbeiro);
                      setModalAberto(true)
                    }}
                  >
                    ✏ Editar
                  </button>
                  <button className="botao-excluir-barbeiro" onClick={() => deletarbarbeiro(barbeiro)}>
                    🗑
                  </button>
                </div>
              </div>
            )
          })}

        </div>
      </div>

      {modalAberto && (
        <ModalBarbeiro
          fecharModal={() => setModalAberto(false)}
          barbeiro={barbeiroSelecionado}

        />
      )}

    </>
  )
}

export default PaginaBarbeiro