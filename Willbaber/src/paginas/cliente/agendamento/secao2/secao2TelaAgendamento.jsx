import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "./secao2TelaAgendamento.css"
import Cabecalho from "../../../../componentes/cabecalho/cabecalho"

const secao2TelaAgendamento = () => {

  const [servicos, setServicos] = useState([])
  const [servicoId, setServicoId] = useState("");
  const [nomeServico, setNomeServico] = useState("");
  const [pontos, setPontos] = useState("");
  const [preco, setPreco] = useState("");
  const [temposervico, setTempoServico] = useState("");

  useEffect(() => {
    const buscarServicos = async () => {
      try {
        const resp = await fetch("http://localhost:8080/servicos")
        const data = await resp.json()
        setServicos(data)

        const serivcoSalvo = JSON.parse(localStorage.getItem("servicoSelecionado"))

        if (serivcoSalvo) {
          setServicoId(serivcoSalvo.servicoId)
          setNomeServico(serivcoSalvo.nomeServico)
          setPontos(serivcoSalvo.pontos)
          setPreco(serivcoSalvo.preco)
          setTempoServico(serivcoSalvo.temposervico)
        }
      }
      catch (error) {
        console.error("Erro ao buscar serviços:", error);

      }
    }
    buscarServicos();
  }, [])


  const salvarServico = () => {
    const dadosServico = {
      servicoId,
      nomeServico,
      pontos,
      preco,
      temposervico
      
    }

    localStorage.setItem("dadosServico", JSON.stringify(dadosServico))
  }
  return (
    <>
      <Cabecalho estatico={true} />

      <div className="container-secao2-tela-agendamento">
        <div className="layout-etapas-tela-agendamento">
          <div>
            <div className="numeros-etapas-tela-agendamento-laranja" >
              <FaCheck />
            </div>
            <div className="texto-etapas-tela-agendamento">
              Barbeiro
            </div>
          </div>

          <div className="linha-etapas-tela-agendamento-laranja">
          </div>

          <div>
            <div className="numeros-etapas-tela-agendamento-laranja">
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
          Escolha o Serviço
        </div>
        <div className="subtitulo-tela-agendamento">
          Selecione o serviço desejado
        </div>

        <div className="grid-servicos-tela-agendamento-secao2">
          {servicos.map((servico) =>
            <div key={servico.id} className="servicos-tela-agendamento">
              <input
                type="radio"
                name="barbeiros"
                id={servico.id}
                value={servico.id}
                checked={servicoId === servico.id}
                onChange={() => {
                  setServicoId(servico.id);
                  setNomeServico(servico.nomeServico);
                  setPontos(servico.pontos);
                  setPreco(servico.preco);
                  setTempoServico(servico.tempoServico);
                }}
                className="input-radio-tela-agendamento-secao2"
              />
              <label htmlFor={servico.id} className="label-servicos-tela-agendamento" >
                <div className="layout-card-servicos-tela-agendamento">
                  <div className="check-icon-tela-agendamento">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="nome-servicos-tela-agendamento">
                    <div className="titulo-servico-tela-agendamento-secao2">{servico.nomeServico}</div>
                    <div className="descricao-servico-tela-agendamento-secao2">{servico.descricao}</div>
                    <div className="informacoes-servico-tela-agendamento-secao2">
                      <div className="preco-servico-tela-agendamento-secao2">R$ {servico.preco},00</div>
                      <div className="tempo-servico-tela-agendamento-secao2">{servico.tempoServico.slice(3, 5)} min</div>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          )}
        </div>
        <div className="container-buttons-tela-agendamento-secao2">
          <div>
            <Link to="/novo-agendamento" className="texto-button-voltar-tela-agendamento-secao2">
              <div className="button-voltar-tela-agendamento-secao2">
                <FaArrowLeft className="icone-seta-tela-agendamento-secao2" /> Voltar
              </div>
            </Link>
          </div>

          <div>
            <Link to="/selecionarHorario" className="texto-button-continuar-tela-agendamento-secao2" onClick={salvarServico}>
              <div className="button-continuar-tela-agendamento-secao2">
                Continuar <FaArrowRight className="icone-seta-tela-agendamento-secao2" />
              </div>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default secao2TelaAgendamento