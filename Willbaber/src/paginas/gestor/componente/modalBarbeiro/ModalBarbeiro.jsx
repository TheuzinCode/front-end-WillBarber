import "./ModalBarbeiro.css";
import { useState } from "react";
import Swal from "sweetalert2";

const ModalBarbeiro = ({ fecharModal, barbeiro }) => {

    const [nome, setNome] = useState(barbeiro?.nome || "");
    const [email, setEmail] = useState(barbeiro?.email || "");
    const [senha, setSenha] = useState(barbeiro?.senha || "");
    const [cpf, setCpf] = useState(barbeiro?.cpf || "");
    const [numero, setNumero] = useState(barbeiro?.telefone || "");
    const [foto, setFoto] = useState(null);
    const [descricao, setDescricao] = useState(barbeiro?.descricao || "")
    const editando = !!barbeiro;

    const [horarios, setHorarios] = useState(barbeiro?.horarios || [
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


        if (!nome || !email || !numero || !cpf || !senha) {
            alert("Por favor, preencha todos os campos");
            return;
        }

        if (senha.length < 8) {
            alert("A senha deve ter no mínimo 8 caracteres");
            return;
        }
        if (cpf.length !== 11) {
            alert("O CPF deve ter exatamente 11 números");
            return;
        }
        if (!email.includes("@")) {
            alert("Digite um email válido");
            return;
        }



        const url = editando
            ? `http://localhost:8080/willbarber/barbeiros/editar-barbeiros/${barbeiro.id}`
            : `http://localhost:8080/willbarber/criarUsuario2`;

        const method = editando
            ? "PUT"
            : "POST";

        try {

            const body = editando
                ? {
                    nome,
                    email,
                    cpf,
                    senha,
                    telefone: numero,
                    descricao,
                    horarios
                }
                : {
                    nome,
                    email,
                    senha,
                    cpf,
                    numero: numero,
                    descricao,
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

            if (foto) {
                formData.append("imagem", foto);
            }

            const resp = await fetch(
                url,
                {
                    method,
                    body: formData
                }
            );

            if (!resp.ok) {
                Swal.fire({
                    icon: "error",
                    title: editando
                        ? "Erro ao editar barbeiro"
                        : "Erro ao cadastrar barbeiro",
                    confirmButtonColor: "#b81717",
                    background: "#111111",
                    color: "#FFFFFF"
                });
                const erro = await resp.text();
                console.log(erro);
                return;
            }

            const data = await resp.json();

            Swal.fire({
                icon: "success",
                title: editando
                    ? "Barbeiro editado com sucesso"
                    : "Barbeiro cadastrado com sucesso",
                confirmButtonColor: "#C9A646",
                background: "#111111",
                color: "#FFFFFF"
            });

            fecharModal();

        } catch (error) {

            console.error(
                "ERRO AO CADASTRAR BARBEIRO",
                error
            );
        }
    }

    const formatarCPF = (valor) => {
        valor = valor.replace(/\D/g, "");

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        return valor;
    }
    const formatarTelefone = (valor) => {
        valor = valor.replace(/\D/g, "");

        valor = valor.replace(/^(\d{2})(\d)/g, "($1)$2");
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

        return valor;
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
                            {editando
                                ? "Editar Barbeiro"
                                : "Cadastrar Barbeiro"}
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

                        {!editando && (

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

                        )}

                        <div className="grupo-input-modal">

                            <label>CPF</label>

                            <input
                                type="text"
                                value={formatarCPF(cpf)}
                                onChange={(e) =>
                                    setCpf(e.target.value.replace(/\D/g, ""))

                                }
                                minLength={14}
                                maxLength={14}
                                placeholder="000.000.000-00"
                            />
                        </div>

                        <div className="grupo-input-modal">

                            <label>Telefone</label>

                            <input
                                type="text"
                                value={formatarTelefone(numero)}
                                onChange={(e) =>
                                    setNumero(e.target.value.replace(/\D/g, ""))
                                }
                                placeholder="(11) 99999-9999"
                                maxLength={14}
                            />
                        </div>

                        <div className="grupo-input-modal">

                            <label>Descrição</label>

                            <input
                                type="text"
                                value={descricao}
                                onChange={(e) =>
                                    setDescricao(e.target.value)
                                }
                                placeholder="Digite a descrição"
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
                            {editando
                                ? "Salvar Alterações"
                                : "Cadastrar Barbeiro"}
                        </button>

                    </form>

                </div>

            </div>

        </>
    )
}

export default ModalBarbeiro