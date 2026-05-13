import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Cabecalho from "../../../../componentes/cabecalho/cabecalho"
import { RiUserStarLine } from "react-icons/ri";
import { RiScissors2Fill } from "react-icons/ri" //Ícone de tesoura;
import { CiClock2 } from "react-icons/ci"; //Ícone de relógio;
import { CiCalendar } from "react-icons/ci"; //Ícone de calendário;
import { LuAlarmClock } from "react-icons/lu"; //Ícone de relógio de alarme;
import Swal from "sweetalert2";
import "./secao4TelaAgendamento.css"


const secao4TelaAgendamento = () => {

  const navigate = useNavigate();
  const [dadosBarbeiro, setDadosBarbeiro] = useState({});
  const [dadosServico, setDadosServico] = useState({});
  const [dadosHorario, setDadosHorario] = useState("");
  const [dadosCliente, setDadosCliente] = useState({});


  useEffect(() => {

    const servicoSalvo = localStorage.getItem("dadosServico");

    if (servicoSalvo) {
      setDadosServico(JSON.parse(servicoSalvo));
    }

    const barbeiroSalvo = localStorage.getItem("dadosBarbeiro");

    if (barbeiroSalvo) {
      setDadosBarbeiro(JSON.parse(barbeiroSalvo));
    }

    const horarioSalvo = localStorage.getItem("horarioSelecionado");

    if (horarioSalvo) {
      setDadosHorario(JSON.parse(horarioSalvo));
    }

    const clienteSalvo = localStorage.getItem("clientAuth");

    if (clienteSalvo) {
      setDadosCliente(JSON.parse(clienteSalvo));
    }


  }, []);

  const confimarAgendamento = async () => {



    const order = {
      dataHora: dadosHorario,
      preco: dadosServico.preco,
      cliente: {
        id: dadosCliente.id
      },
      barbeiro: {
        id: dadosBarbeiro.idBarbeiro
      },
      servico: {
        id: dadosServico.servicoId
      }
    }

    console.log(order)

    try {
      const resp = await fetch("http://localhost:8080/willbarber/agendamento/novoagendamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
      }
      );


      Swal.fire({
        icon: "success",
        title: "Agendamento confirmado!",
        text: "Seu horário foi reservado com sucesso.",
        confirmButtonColor: "#C9A646",
        background: "#111111",
        color: "#FFFFFF"
      });


      localStorage.removeItem("dadosBarbeiro");
      localStorage.removeItem("dadosServico");
      localStorage.removeItem("horarioSelecionado");

      navigate("/");


    } catch (error) {
      console.error("Erro ao criar agendamento:", error);
    }


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
              <FaCheck />
            </div>
            <div className="texto-etapas-tela-agendamento">
              Horario
            </div>
          </div>

          <div className="linha-etapas-tela-agendamento-laranja">
          </div>

          <div>
            <div className="numeros-etapas-tela-agendamento-laranja">
              4
            </div>
            <div className="texto-etapas-tela-agendamento">
              Confirmar
            </div>
          </div>

        </div>

        <div className="titulo-principal-tela-agendamento">
          Confirmar Agendamento
        </div>
        <div className="subtitulo-tela-agendamento">
          Revise os detalhes antes de confirmar
        </div>


        <div className="container-confirmar-tela-agendamento-secao4">
          <div className="layout-informacoes-tela-agendamento-secao4">
            <div className="lado-esquerdo-tela-agendamento-secao4">
              <div className="icone-tela-agendamento-secao4">
                <RiUserStarLine color="#BF9445" size={25} />
              </div>
              <div className="texto-informacoes-tela-agendamento-secao4">
                Barbeiro
              </div>
            </div>
            <div className="lado-direito-tela-agendamento-secao4">
              {dadosBarbeiro.nomeBarbeiro}
            </div>
          </div>

          <div className="layout-informacoes-tela-agendamento-secao4">
            <div className="lado-esquerdo-tela-agendamento-secao4">
              <div className="icone-tela-agendamento-secao4">
                <RiScissors2Fill color="#BF9445" size={25} />
              </div>
              <div className="texto-informacoes-tela-agendamento-secao4">
                Serviço
              </div>
            </div>
            <div className="lado-direito-tela-agendamento-secao4">
              {dadosServico.nomeServico}
            </div>
          </div>

          <div className="layout-informacoes-tela-agendamento-secao4">
            <div className="lado-esquerdo-tela-agendamento-secao4">
              <div className="icone-tela-agendamento-secao4">
                <CiClock2 color="#BF9445" size={25} />
              </div>
              <div className="texto-informacoes-tela-agendamento-secao4">
                Duração
              </div>
            </div>
            <div className="lado-direito-tela-agendamento-secao4">
              {dadosServico?.temposervico?.substring(3, 5)} min
            </div>
          </div>

          <div className="layout-informacoes-tela-agendamento-secao4">
            <div className="lado-esquerdo-tela-agendamento-secao4">
              <div className="icone-tela-agendamento-secao4">
                <CiCalendar color="#BF9445" size={25} />
              </div>
              <div className="texto-informacoes-tela-agendamento-secao4">
                Data
              </div>
            </div>
            <div className="lado-direito-tela-agendamento-secao4">
              {new Date(dadosHorario).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </div>
          </div>

          <div className="layout-informacoes-tela-agendamento-secao4">
            <div className="lado-esquerdo-tela-agendamento-secao4">
              <div className="icone-tela-agendamento-secao4">
                <LuAlarmClock color="#BF9445" size={25} />
              </div>
              <div className="texto-informacoes-tela-agendamento-secao4">
                Horário
              </div>
            </div>
            <div className="lado-direito-tela-agendamento-secao4">
              {dadosHorario?.substring(11, 16)}
            </div>
          </div>


          <div className="layout-total-valor-informacoes-tela-agendamento-secao4">
            <div className="texto-total-informacoes-tela-agendamento-secao4">
              Total
            </div>
            <div className="valor-total-informacoes-tela-agendamento-secao4">
              R$ {dadosServico.preco},00 
            </div>
          </div>

        </div>






        <div className="container-buttons-tela-agendamento-secao4">
          <div>
            <Link to="/selecionarHorario" className="texto-button-voltar-tela-agendamento-secao2">
              <div className="button-voltar-tela-agendamento-secao2">
                <FaArrowLeft className="icone-seta-tela-agendamento-secao2" /> Voltar
              </div>
            </Link>
          </div>

          <div>
            <button className="texto-button-continuar-tela-agendamento-secao4" onClick={confimarAgendamento}>
              <div className="button-continuar-tela-agendamento-secao2">
                Confirmar Agendamento
              </div>
            </button>
          </div>
        </div>
      </div >




    </>


  )
}

export default secao4TelaAgendamento