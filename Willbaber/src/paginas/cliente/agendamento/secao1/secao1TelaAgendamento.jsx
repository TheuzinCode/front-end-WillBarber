import { useEffect, useState } from "react";
import "./secao1TelaAgendamento.css"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom";


const secao1TelaAgendamento = () => {

  const [nomeBarbeiro, setNomeBarbeiro] = useState("")
  const [idBarbeiro, setIdBarbeiro] = useState("")
  const [barbeiros, setBarbeiros] = useState([])

  useEffect(() => {
    const buscarBabeiros = async () => {

      try {
        const resp = await fetch("http://localhost:8080/willbarber/agendamento/listar-todos-barbeiros")
        const data = await resp.json()
        setBarbeiros(data)
        console.log("Barbeiros:", data)

        const barbeiroSalvo = JSON.parse(localStorage.getItem("barbeiroSelecionado"))

        if (barbeiroSalvo) {
          setIdBarbeiro(barbeiroSalvo.idBarbeiro)
          setNomeBarbeiro(barbeiroSalvo.nomeBarbeiro)
        }

      }
      catch (error) {
        console.error("Erro ao buscar barbeiros:", error);
      }
    }

    buscarBabeiros();
  }, [])


  const salvarBarbeiro = () => {
    const dadosBarbeiro = {
      idBarbeiro,
      nomeBarbeiro
    }

    localStorage.setItem("dadosBarbeiro", JSON.stringify(dadosBarbeiro))
  }

  return (
    <>
      <div className="container-secao1-tela-agendamento">
        <div className="layout-etapas-tela-agendamento">
          <div>
            <div className="numeros-etapas-tela-agendamento-laranja" >
              1
            </div>
            <div className="texto-etapas-tela-agendamento">
              Barbeiro
            </div>
          </div>

          <div className="linha-etapas-tela-agendamento-cinza">
          </div>

          <div>
            <div className="numeros-etapas-tela-agendamento-cinza">
              2
            </div>
            <div className="texto-etapas-tela-agendamento">
              Serviço
            </div>
          </div>

          <div className="linha-etapas-tela-agendamento-cinza">
          </div>

          <div>
            <div className="numeros-etapas-tela-agendamento-cinza">
              3
            </div>
            <div className="texto-etapas-tela-agendamento">
              Horario
            </div>
          </div>

          <div className="linha-etapas-tela-agendamento-cinza">
          </div>

          <div>
            <div className="numeros-etapas-tela-agendamento-cinza">
              4
            </div>
            <div className="texto-etapas-tela-agendamento">
              Confirmar
            </div>
          </div>

        </div>

        <div className="titulo-principal-tela-agendamento">
          Escolha Seu Barbeiro
        </div>
        <div className="subtitulo-tela-agendamento">
          Selecione o profissional de sua preferencia
        </div>




        <div className="grid-barbeiros-tela-agendamento">
          {barbeiros.map((barbeiro) =>
            <div key={barbeiro.id} className="barbeiro-tela-agendamento">
              <input
                type="radio"
                name="barbeiros"
                id={barbeiro.id}
                value={barbeiro.id}
                checked={idBarbeiro === barbeiro.id}
                onChange={() => {
                  setIdBarbeiro(barbeiro.id);
                  setNomeBarbeiro(barbeiro.nome);
                }}
                className="input-radio-tela-agendamento"
              />
              <label htmlFor={barbeiro.id} className="label-barbeiro-tela-agendamento" >
                <div className="layout-card-barbeiro-tela-agendamento">
                  <div className="check-icon-tela-agendamento">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="imagem-barbeiro-tela-agendamento">foto</p>
                  <div className="nome-barbeiro-tela-agendamento">
                    <h2 className="nome-baebeiro-tela-agendamento-secao01">{barbeiro.nome}</h2>
                  </div>
                </div>
              </label>
            </div>
          )}
        </div>

        <div className="layout-button-continuar-tela-agendamento-secao1">
          <Link to="/selecionarServico" className="texto-button-continuar-tela-agendamento-secao1" onClick={salvarBarbeiro}>
            <div className="button-continuar-tela-agendamento-secao1">
              Continuar <FaArrowRight />
            </div>
          </Link>
        </div>




      </div>
    </>
  )
}

export default secao1TelaAgendamento