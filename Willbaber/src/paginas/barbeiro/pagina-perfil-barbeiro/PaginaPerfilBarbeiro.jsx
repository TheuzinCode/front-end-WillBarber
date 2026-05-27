import "./PaginaPerfilBarbeiro.css"
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const PaginaPerfilBarbeiro = () => {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [cpf, setCpf] = useState("")
  const [numero, setNumero] = useState("")
  const [foto, setFoto] = useState(null);
  const [descricao, setDescricao] = useState("")
  const [horarios, setHorarios] = useState([{
    diaSemana: "",
    horaInicio: "",
    horaFim: ""
  }])

  const [barbeiro, setBarbeiro] = useState(null)

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


  useEffect(() => {
    async function BuscarBarbeiro() {

      const usersObj =
        localStorage.getItem(
          "clientAuth"
        );
      if (!usersObj) return;
      const usersOpt =
        JSON.parse(usersObj);

      const resp = await fetch(
        `http://localhost:8080/willbarber/barbeiro/${usersOpt.id}/meu-perfil`
      )

      const data = await resp.json()
      if (!resp.ok) {
        console.log(resp)
        return
      }
      setBarbeiro(data)

      setNome(data.nome)
      setEmail(data.email)
      setCpf(data.cpf)
      setNumero(data.telefone)
      setFoto(data.imagem)
      setDescricao(data.descricao)
      setHorarios(data.horarios)

    }
    BuscarBarbeiro()
  }, [])


  async function atualizarBarbeiro(e) {
    e.preventDefault();

    try {
      const body = {
        nome,
        email,
        cpf,
        senha,
        telefone: numero,
        descricao,
        horarios
      }

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
        `http://localhost:8080/willbarber/barbeiros/editar-barbeiros/${barbeiro.id}`,
        {
          method: "PUT",
          body: formData
        }
      )

      if (!resp.ok) {
        console.log("Erro ao cadastrar");
        const erro = await resp.text();
        Swal.fire({
          icon: "error",
          title: "Erro",
          text: erro
        });

        return;
      }

      await Swal.fire({
        icon: "success",
        title: "Perfil atualizado!",
        text: "As informações foram salvas com sucesso.",
        confirmButtonColor: "#C9A646",
        background: "#111111",
        color: "#FFFFFF"
      });

      const data = await resp.json();


      window.location.reload();

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "Ocorreu um erro ao atualizar o perfil.",
        confirmButtonColor: "#C9A646",
        background: "#111111",
        color: "#FFFFFF"
      });
      console.log(error)
    }
  }

  if (!barbeiro) {
    return (
      <div className="loading">
        Carregando...
      </div>
    )
  }
  return (
    <>

      <div className="pagina-perfil-barbeiro">

        <h1 className="titulo-perfil-pagina-perfil-barbeiro">
          Perfil do Barbeiro
        </h1>

        <div className="layout-perfil-pagina-perfil-barbeiro">

          {/* PERFIL */}

          <div className="card-perfil-pagina-perfil-barbeiro">

            {/* TOPO */}

            <div className="topo-perfil-pagina-perfil-barbeiro">

              <div className="container-foto-pagina-perfil-barbeiro">

                <img
                  src={`data:image/jpeg;base64,${barbeiro.imagem}`}
                  alt={barbeiro.nome}
                  className="foto-barbeiro-pagina-perfil-barbeiro"
                />

                <button className="botao-camera-pagina-perfil-barbeiro">
                  📷
                </button>
              </div>

              <div>
                <h2 className="nome-barbeiro-pagina-perfil-barbeiro">
                  {barbeiro.nome}
                </h2>
                <p className="especialidade-pagina-perfil-barbeiro">
                  {barbeiro.descricao}
                </p>
              </div>
            </div>

            {/* CAMPOS */}

            <div className="container-campos-pagina-perfil-barbeiro">

              {/* NOME */}

              <div className="grupo-input-pagina-perfil-barbeiro">

                <label>
                  Nome
                </label>

                <div className="input-perfil-pagina-perfil-barbeiro">

                  <span>
                    👤
                  </span>

                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Digite o nome"
                  />

                </div>

              </div>

              {/* ESPECIALIDADE */}

              <div className="grupo-input-pagina-perfil-barbeiro">

                <label>
                  Especialidade
                </label>

                <div className="input-perfil-pagina-perfil-barbeiro">

                  <span>
                    ✂
                  </span>

                  <input
                    type="text"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Digite a especialidade"
                  />

                </div>

              </div>

              {/* TELEFONE */}

              <div className="grupo-input-pagina-perfil-barbeiro">

                <label>
                  Telefone
                </label>

                <div className="input-perfil-pagina-perfil-barbeiro">

                  <span>
                    ☎
                  </span>

                  <input
                    type="text"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    placeholder="Digite o telefone"
                  />

                </div>

              </div>

              {/* EMAIL */}

              <div className="grupo-input-pagina-perfil-barbeiro">

                <label>
                  Email
                </label>

                <div className="input-perfil-pagina-perfil-barbeiro">

                  <span>
                    ✉
                  </span>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite o email"
                  />

                </div>

              </div>

              <div className="grupo-input-pagina-perfil-barbeiro">

                <label>
                  Senha
                </label>

                <div className="input-perfil-pagina-perfil-barbeiro">

                  <span>
                    ✉
                  </span>

                  <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Digite a senha"
                  />

                </div>

              </div>

            </div>

            {/* BOTAO */}

            <button
              type="submit"
              onClick={atualizarBarbeiro}
              className="botao-editar-pagina-perfil-barbeiro">
              ✎ Editar Perfil
            </button>

          </div>

          {/* HORARIOS */}

          <div className="card-horarios-pagina-perfil-barbeiro">

            <h2 className="titulo-horarios-pagina-perfil-barbeiro">
              Horários de Trabalho
            </h2>

            {/* ITEM */}


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
        </div>
      </div>
    </>
  )
}

export default PaginaPerfilBarbeiro