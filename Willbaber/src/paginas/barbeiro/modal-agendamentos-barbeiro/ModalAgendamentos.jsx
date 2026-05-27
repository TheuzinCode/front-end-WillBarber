import "./ModalAgendamentos.css"
import { IoClose } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { RiScissors2Line } from "react-icons/ri";
import { FiTag } from "react-icons/fi";
import { useState } from "react";
import Swal from "sweetalert2";

const ModalAgendamentos = ({ fecharModal, agendamento }) => {

  const [status, setStatus] = useState(agendamento.statusAgendamento)


  async function atualizarStatus() {

    try {

      const body = status;

      const resp = await fetch(
        `http://localhost:8080/willbarber/agendamento/agendamentos/${agendamento.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify(body)
        }
      );

      if (!resp.ok) {

        const erro =
          await resp.text();

        Swal.fire({
          icon: "error",
          title: "Erro",
          text: erro
        });

        return;
      }

      await Swal.fire({
        icon: "success",
        title: "Status atualizado!"
      });

      window.location.reload();

    } catch (error) {

      console.log(error);
    }
  }

  return (
    <>
      <div className="overlay-modal-agendamento">

        <div className="container-modal-agendamento">

          {/* TOPO */}

          <div className="topo-modal-agendamento">

            <h1>
              Detalhes do Cliente
            </h1>

            <button
              className="botao-fechar-modal-agendamento"

              onClick={() => {
                fecharModal();
              }}
            >
              <IoClose />
            </button>

          </div>

          {/* CLIENTE */}

          <div className="cliente-modal-agendamento">

            <div className="avatar-modal-agendamento">
              {
                agendamento
                  .nomeCliente
                  .charAt(0)
              }
            </div>

            <div>

              <h2>
                {
                  agendamento
                    .nomeCliente
                }
              </h2>

              <span className="status-modal-agendamento">
                {
                  agendamento
                    .statusAgendamento
                }
              </span>

            </div>

          </div>

          {/* INFORMACOES */}

          <div className="informacoes-modal-agendamento">

            {/* SERVICO */}

            <div className="item-informacao-modal-agendamento">

              <div className="icone-informacao-modal-agendamento">
                <RiScissors2Line />
              </div>

              <div>

                <span>
                  Serviço
                </span>

                <h3>
                  {
                    agendamento
                      .nomeServico
                  }
                </h3>

              </div>

            </div>

            {/* HORARIO */}

            <div className="item-informacao-modal-agendamento">

              <div className="icone-informacao-modal-agendamento">
                <CiClock2 />
              </div>

              <div>

                <span>
                  Horário
                </span>

                <h3>
                  {
                    agendamento
                      .dataHora
                      .substring(11, 16)
                  }
                </h3>

              </div>

            </div>

            {/* DURACAO */}

            <div className="item-informacao-modal-agendamento">

              <div className="icone-informacao-modal-agendamento">
                <FiTag />
              </div>

              <div>

                <span>
                  Duração
                </span>

                <h3>
                  {
                    agendamento
                      .duracao
                      .substring(3, 5)
                  } minutos
                </h3>

              </div>

            </div>

          </div>

          <div className="grupo-status-modal-agendamento">

            <label>
              Status do Agendamento
            </label>

            <select

              value={status}

              onChange={(e) =>
                setStatus(
                  e.target.value
                )
              }
            >

              <option value="AGENDADO">
                AGENDADO
              </option>

              <option value="FINALIZADO">
                FINALIZADO
              </option>

              <option value="CANCELADO">
                CANCELADO
              </option>

            </select>

          </div>

          {/* BOTAO */}

          <button
            className="botao-fechar-principal-modal-agendamento"

            onClick={() => {
              atualizarStatus();
              fecharModal();
            }}
          >
            Salvar Alterações
          </button>

        </div>
      </div>
    </>
  )
}

export default ModalAgendamentos