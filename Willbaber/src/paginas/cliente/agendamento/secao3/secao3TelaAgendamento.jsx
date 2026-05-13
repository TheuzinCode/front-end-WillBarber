import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Cabecalho from "../../../../componentes/cabecalho/cabecalho"
import Calendar from "react-calendar";
import "./secao3TelaAgendamento.css"
const secao3TelaAgendamento = () => {

  const [dataSelecionada, setDataSelecionada] = useState(new Date());
  const [horarioSelecionado, setHorarioSelecionado] = useState("");
  const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);


  const selecionarData = async (data) => {

    setDataSelecionada(data);

    const dataFormatada =
      data.toISOString().split("T")[0];

    const barbeiroSelecionado = JSON.parse(
      localStorage.getItem("dadosBarbeiro")
    );

    const barbeiroId =
      barbeiroSelecionado.idBarbeiro;

    try {

      const response = await fetch(
        `http://localhost:8080/willbarber/agendamento/horarios-disponiveis?barbeiroId=${barbeiroId}&data=${dataFormatada}`
      );

      const data = await response.json();
      setHorariosDisponiveis(data);

    } catch (error) {
      console.error("Erro ao buscar horários disponíveis:", error);
    }
  };

  const selecionarHorario = (horario) => {
    setHorarioSelecionado(horario);
    localStorage.setItem("horarioSelecionado", JSON.stringify(horario));
  }

  return (
    <>
      <Cabecalho estatico={true} />

      <div className="container-secao3-tela-agendamento">
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
              <FaCheck />
            </div>
            <div className="texto-etapas-tela-agendamento">
              Serviço
            </div>
          </div>

          <div className="linha-etapas-tela-agendamento-laranja">
          </div>

          <div>
            <div className="numeros-etapas-tela-agendamento-laranja">
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
          Escolha o Horário
        </div>
        <div className="subtitulo-tela-agendamento">
          Selecione quando deseja ser atendido
        </div>

        <div className="layout-calendario-horarios-tela-agendamento-secao3">
          <div className="container-calendario">

            <Calendar
              onChange={selecionarData}
              value={dataSelecionada}
              locale="pt-BR"
              prevLabel="‹"
              nextLabel="›"
              next2Label={null}
              prev2Label={null}
              minDate={new Date()}
              showNeighboringMonth={false}
              formatShortWeekday={(locale, date) =>
                ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][date.getDay()]
              }
            />

          </div>


          <div>

            <div className="container-horarios">

              <h2 className="titulo-horarios">
                Horários Disponíveis  {dataSelecionada.toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </h2>

              <div className="grid-horarios">

                {horariosDisponiveis.map((horario) => (

                  <button
                    key={horario}
                    className={
                      horarioSelecionado === horario
                        ? "botao-horario selecionado"
                        : "botao-horario"
                    }
                    onClick={() => selecionarHorario(horario)}
                  >
                    {horario.substring(11, 16)}
                  </button>

                ))}

              </div>

            </div>

          </div>
        </div>


        <div className="container-buttons-tela-agendamento-secao2">
          <div>
            <Link to="/selecionarServico" className="texto-button-voltar-tela-agendamento-secao2">
              <div className="button-voltar-tela-agendamento-secao2">
                <FaArrowLeft className="icone-seta-tela-agendamento-secao2" /> Voltar
              </div>
            </Link>
          </div>

          <div>
            <Link to="/confirmarAgendamento" className="texto-button-continuar-tela-agendamento-secao2">
              <div className="button-continuar-tela-agendamento-secao2">
                Continuar <FaArrowRight className="icone-seta-tela-agendamento-secao2" />
              </div>
            </Link>
          </div>
        </div>
      </div >
    </>
  )
}

export default secao3TelaAgendamento