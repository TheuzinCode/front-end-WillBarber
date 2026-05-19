import "./ModalBarbeiro.css";
import { useState } from "react";

const ModalBarbeiro = ({ fecharModal }) => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cpf, setCpf] = useState("");
    const [numero, setNumero] = useState("");
    const [foto, setFoto] = useState(null);

    const [horarios, setHorarios] = useState([
        {
            diaSemana: "",
            horaInicio: "",
            horaFim: ""
        }
    ]);

    function alterarHorario(index, campo, valor) {

        const novosHorarios = [...horarios];

        novosHorarios[index][campo] = valor;

        setHorarios(novosHorarios);
    }

    function adicionarHorario() {

        setHorarios([
            ...horarios,
            {
                diaSemana: "",
                horaInicio: "",
                horaFim: ""
            }
        ]);
    }

    function removerHorario(index) {

        const novosHorarios = horarios.filter(
            (_, i) => i !== index
        );

        setHorarios(novosHorarios);
    }

    async function cadastrarBarbeiro(e) {

        e.preventDefault();

        try {



            const body = {
                nome,
                email,
                senha,
                cpf,
                numero,
                tipo: "BARBEIRO",
                horarios
            };

            const formData = new FormData();

            formData.append(
                "users",
                new Blob(
                    [JSON.stringify(body)],
                    {
                        type: "application/json"
                    }
                )
            );

            formData.append("imagem", foto);

            const resp = await fetch(
                "http://localhost:8080/willbarber/criarUsuario2",
                {
                    method: "POST",
                    body: formData
                }
            );

            if (!resp.ok) {
                console.log("Erro ao cadastrar");
                const erro = await resp.text();
                console.log(erro);
                return;
            }

            const data = await resp.json();

            console.log(data);

            fecharModal();

        } catch (error) {

            console.error(
                "ERRO AO CADASTRAR BARBEIRO",
                error
            );
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
                            Cadastrar Barbeiro
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
                        onSubmit={cadastrarBarbeiro}
                    >

                        <div className="grupo-input-modal">
                            <label>Nome</label>

                            <input
                                type="text"
                                value={nome}
                                onChange={(e) =>
                                    setNome(e.target.value)
                                }
                                placeholder="Digite o nome"
                            />
                        </div>

                        <div className="grupo-input-modal">

                            <label>Email</label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="Digite o email"
                            />
                        </div>

                        <div className="grupo-input-modal">

                            <label>Senha</label>

                            <input
                                type="password"
                                value={senha}
                                onChange={(e) =>
                                    setSenha(e.target.value)
                                }
                                placeholder="Digite a senha"
                            />
                        </div>

                        <div className="grupo-input-modal">

                            <label>CPF</label>

                            <input
                                type="text"
                                value={cpf}
                                onChange={(e) =>
                                    setCpf(e.target.value)
                                }
                                placeholder="000.000.000-00"
                            />
                        </div>

                        <div className="grupo-input-modal">

                            <label>Telefone</label>

                            <input
                                type="text"
                                value={numero}
                                onChange={(e) =>
                                    setNumero(e.target.value)
                                }
                                placeholder="(11) 99999-9999"
                            />
                        </div>

                        <div className="grupo-input-modal">

                            <label>Foto</label>

                            <input
                                type="file"
                                onChange={(e) =>
                                    setFoto(e.target.files[0])
                                }
                            />
                        </div>

                        <div className="container-horarios">

                            <h3>
                                Horários de Trabalho
                            </h3>

                            {horarios.map((horario, index) => (

                                <div
                                    className="linha-horario"
                                    key={index}
                                >

                                    <select
                                        value={horario.diaSemana}
                                        onChange={(e) =>
                                            alterarHorario(
                                                index,
                                                "diaSemana",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">
                                            Dia
                                        </option>

                                        <option value="MONDAY">
                                            Segunda
                                        </option>

                                        <option value="TUESDAY">
                                            Terça
                                        </option>

                                        <option value="WEDNESDAY">
                                            Quarta
                                        </option>

                                        <option value="THURSDAY">
                                            Quinta
                                        </option>

                                        <option value="FRIDAY">
                                            Sexta
                                        </option>

                                        <option value="SATURDAY">
                                            Sábado
                                        </option>

                                        <option value="SUNDAY">
                                            Domingo
                                        </option>

                                    </select>

                                    <input
                                        type="time"
                                        value={horario.horaInicio}
                                        onChange={(e) =>
                                            alterarHorario(
                                                index,
                                                "horaInicio",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <input
                                        type="time"
                                        value={horario.horaFim}
                                        onChange={(e) =>
                                            alterarHorario(
                                                index,
                                                "horaFim",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <button
                                        type="button"
                                        className="botao-remover-horario"
                                        onClick={() =>
                                            removerHorario(index)
                                        }
                                    >
                                        X
                                    </button>

                                </div>
                            ))}

                            <button
                                type="button"
                                className="botao-adicionar-horario"
                                onClick={adicionarHorario}
                            >
                                + Adicionar Horário
                            </button>

                        </div>

                        <button
                            type="submit"
                            className="botao-salvar-modal"
                        >
                            Cadastrar Barbeiro
                        </button>

                    </form>

                </div>

            </div>

        </>
    )
}

export default ModalBarbeiro