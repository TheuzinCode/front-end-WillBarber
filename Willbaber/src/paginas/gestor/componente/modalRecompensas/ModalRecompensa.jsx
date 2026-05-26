import "./ModalRecompensa.css"
import { useState } from "react";
import Swal from "sweetalert2";

const ModalRecompensa = ({
    fecharModal,
    recompensa
}) => {

    const [nomeRecompensa, setNomeRecompensa] =
        useState(recompensa?.nomeRecompensa || "");

    const [descricao, setDescricao] =
        useState(recompensa?.descricao || "");

    const [pontos, setPontos] =
        useState(recompensa?.pontos || "");

    async function CriarNovaRecompensa(e) {

        e.preventDefault();

        if (
            !nomeRecompensa ||
            !descricao ||
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

        const editando = !!recompensa;

        const body = {
            nomeRecompensa,
            descricao,
            pontos
        };

        const url = editando
            ? `http://localhost:8080/Willbarber/recompensa/editar-recompensa/${recompensa.id}`
            : `http://localhost:8080/Willbarber/recompensa/nova-recompensa`;

        const method = editando
            ? "PUT"
            : "POST";

        try {

            const resp = await fetch(
                url,
                {
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
                        ? "Erro ao editar recompensa"
                        : "Erro ao cadastrar recompensa",
                    confirmButtonColor: "#b81717",
                    background: "#111111",
                    color: "#FFFFFF"
                });

                return;
            }

            Swal.fire({
                icon: "success",
                title: editando
                    ? "Recompensa editada com sucesso"
                    : "Recompensa criada com sucesso",
                confirmButtonColor: "#C9A646",
                background: "#111111",
                color: "#FFFFFF"
            });

            fecharModal();

        } catch (error) {

            console.log(error);

            Swal.fire({
                icon: "error",
                title: "Erro interno",
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
                className="overlay-modal-pagina-recompensa"
                onClick={fecharModal}
            >

                <div
                    className="container-modal-pagina-recompensa"
                    onClick={(e) => e.stopPropagation()}
                >

                    <div className="topo-modal-pagina-recompensa">

                        <h1 className="titulo-modal-pagina-recompensa">
                            {recompensa
                                ? "Editar Recompensa"
                                : "Nova Recompensa"}
                        </h1>

                        <button
                            className="botao-fechar-modal-pagina-recompensa"
                            onClick={fecharModal}
                        >
                            ✕
                        </button>

                    </div>

                    <form
                        className="formulario-modal-pagina-recompensa"
                        onSubmit={CriarNovaRecompensa}
                    >

                        <div className="grupo-input-modal-pagina-recompensa">

                            <label>
                                Nome Recompensa
                            </label>

                            <input
                                type="text"
                                value={nomeRecompensa}
                                onChange={(e) =>
                                    setNomeRecompensa(e.target.value)
                                }
                            />

                        </div>

                        <div className="grupo-input-modal-pagina-recompensa">

                            <label>
                                Descrição
                            </label>

                            <textarea
                                value={descricao}
                                onChange={(e) =>
                                    setDescricao(e.target.value)
                                }
                            />

                        </div>

                        <div className="grupo-input-modal-pagina-recompensa">

                            <label>
                                Pontos necessários
                            </label>

                            <input
                                type="number"
                                value={pontos}
                                onChange={(e) =>
                                    setPontos(e.target.value)
                                }
                            />

                        </div>

                        <div className="container-botoes-modal-pagina-recompensa">

                            <button
                                type="button"
                                className="botao-cancelar-modal-pagina-recompensa"
                                onClick={fecharModal}
                            >
                                Cancelar
                            </button>

                            <button
                                type="submit"
                                className="botao-criar-modal-pagina-recompensa"
                            >
                                {recompensa
                                    ? "Salvar"
                                    : "Criar"}
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </>
    )
}

export default ModalRecompensa