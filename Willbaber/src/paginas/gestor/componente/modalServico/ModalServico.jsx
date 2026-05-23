import "./ModalServico.css"
import { useState } from "react";
import Swal from "sweetalert2";


const ModalServico = ({ fecharModal, servico }) => {

    const [nomeServico, setNomeServico] =
        useState(servico?.nomeServico || "");
    const [descricao, setDescricao] = useState(servico?.descricao || "")
    const [preco, setPreco] = useState(servico?.preco || "")
    const [duracao, setDuracao] = useState(servico?.tempoServico?.substring(3, 5) || "")
    const [pontos, setPontos] = useState(servico?.pontos || "")


    async function cadastrarServico(e) {
        e.preventDefault();

        if (
            !nomeServico ||
            !descricao ||
            !preco ||
            !duracao ||
            !pontos
        ) {

            Swal.fire({
                icon: "warning",
                title: "Campos obrigatórios",
                text: "Preencha todos os campos!",
                confirmButtonColor: "#b81717",
                background: "#111111",
                color: "#FFFFFF"
            });

            return;
        }

        const body = {
            nomeServico,
            preco,
            descricao,
            tempoServico: `00:${duracao.padStart(2, "0")}:00`,
            pontos
        }


        const editando = !!servico;

        const url = editando
            ? `http://localhost:8080/servicos/editar-servico/${servico.id}`
            : `http://localhost:8080/servicos/novo-servico`;

        const method = editando
            ? "PUT"
            : "POST";

        try {

            const resp = await fetch(
                url, {
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }
            );

            if (!resp.ok) {
                Swal.fire({
                    icon: "error",
                    title: editando
                        ? "Erro ao editar serviço"
                        : "Erro ao cadastrar serviço",
                    text: editando
                        ? "Não foi possível editar o serviço!"
                        : "Não foi possível cadastrar o serviço!",
                    confirmButtonColor: "#b81717",
                    background: "#111111",
                    color: "#FFFFFF"
                });
                return;
            }

            Swal.fire({
                icon: "success",
                title: "Servico criado com sucesso",
                text: "Servico criado com sucesso!",
                confirmButtonColor: "#C9A646",
                background: "#111111",
                color: "#FFFFFF"
            });

            fecharModal();
        } catch (error) {
            console.error("Erro ao criar servico:", error);

            Swal.fire({
                icon: "error",
                title: "Erro",
                text: "Erro interno no sistema",
                confirmButtonColor: "#b81717",
                background: "#111111",
                color: "#FFFFFF"
            });
        }
    }

    return (
        <>

            <div
                className="overlay-modal"
                onClick={fecharModal}
            >

                <div
                    className="container-modal"
                    onClick={(e) => e.stopPropagation()}
                >

                    <div className="topo-modal">

                        <h2>
                            {servico
                                ? "Editar Serviço"
                                : "Cadastrar Serviço"}
                        </h2>

                        <button
                            className="botao-fechar-modal"
                            onClick={fecharModal}
                        >
                            X
                        </button>

                    </div>

                    <form
                        className="formulario-modal"
                        onSubmit={cadastrarServico}
                    >

                        <div className="grupo-input-modal">
                            <label>Nome Servico</label>

                            <input
                                type="text"
                                required
                                value={nomeServico}
                                onChange={(e) =>
                                    setNomeServico(e.target.value)
                                }
                                placeholder="Ex: Corte de Cabelo"

                            />
                        </div>

                        <div className="grupo-input-modal">

                            <label>Descrição</label>

                            <input
                                type="text"
                                required
                                value={descricao}
                                onChange={(e) =>
                                    setDescricao(e.target.value)
                                }
                                placeholder="Descreva o serviço..."
                            />
                        </div>

                        <div className="grupo-input-modal">

                            <label>Preco (R$) </label>

                            <input
                                type="number"
                                required
                                value={preco}
                                onChange={(e) =>
                                    setPreco(e.target.value)
                                }
                                placeholder="0"
                            />
                        </div>

                        <div className="grupo-input-modal">

                            <label>Duração (min) </label>

                            <input
                                type="number"
                                required
                                min="0"
                                max="59"
                                value={duracao}
                                onChange={(e) =>
                                    setDuracao(e.target.value)
                                }
                                placeholder="00"
                            />
                        </div>

                        <div className="grupo-input-modal">

                            <label>Pontos</label>

                            <input
                                type="number"
                                required
                                value={pontos}
                                onChange={(e) =>
                                    setPontos(e.target.value)
                                }
                                placeholder="15"
                            />
                        </div>
                        <button
                            type="submit"
                            className="botao-salvar-modal"
                        >
                            Cadastrar Servico
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ModalServico