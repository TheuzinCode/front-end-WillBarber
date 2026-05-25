import "./PaginaPerfilBarbeiro.css"

const PaginaPerfilBarbeiro = () => {
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
                  src="/barbeiro.jpg"
                  alt="Barbeiro"
                  className="foto-barbeiro-pagina-perfil-barbeiro"
                />

                <button className="botao-camera-pagina-perfil-barbeiro">
                  📷
                </button>

              </div>

              <div>

                <h2 className="nome-barbeiro-pagina-perfil-barbeiro">
                  William Santos
                </h2>

                <p className="especialidade-pagina-perfil-barbeiro">
                  Corte Clássico & Barba
                </p>

                <span className="experiencia-pagina-perfil-barbeiro">
                  8 anos de experiência
                </span>

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
                    value="William Santos"
                    readOnly
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
                    value="Corte Clássico & Barba"
                    readOnly
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
                    value="william@willbarber.com"
                    readOnly
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
                    value="(11) 9 9876-5432"
                    readOnly
                  />

                </div>

              </div>

            </div>

            {/* BOTAO */}

            <button className="botao-editar-pagina-perfil-barbeiro">
              ✎ Editar Perfil
            </button>

          </div>

          {/* HORARIOS */}

          <div className="card-horarios-pagina-perfil-barbeiro">

            <h2 className="titulo-horarios-pagina-perfil-barbeiro">
              Horários de Trabalho
            </h2>

            {/* ITEM */}

            <div className="linha-horario-pagina-perfil-barbeiro">

              <select className="select-dia-pagina-perfil-barbeiro">
                <option>Segunda</option>
              </select>

              <input
                type="text"
                value="08:00:00"
                className="input-horario-pagina-perfil-barbeiro"
                readOnly
              />

              <input
                type="text"
                value="16:00:00"
                className="input-horario-pagina-perfil-barbeiro"
                readOnly
              />

              <button className="botao-remover-horario-pagina-perfil-barbeiro">
                X
              </button>

            </div>

            {/* ITEM */}

            <div className="linha-horario-pagina-perfil-barbeiro">

              <select className="select-dia-pagina-perfil-barbeiro">
                <option>Terça</option>
              </select>

              <input
                type="text"
                value="09:00:00"
                className="input-horario-pagina-perfil-barbeiro"
                readOnly
              />

              <input
                type="text"
                value="18:00:00"
                className="input-horario-pagina-perfil-barbeiro"
                readOnly
              />

              <button className="botao-remover-horario-pagina-perfil-barbeiro">
                X
              </button>

            </div>

            {/* ITEM */}

            <div className="linha-horario-pagina-perfil-barbeiro">

              <select className="select-dia-pagina-perfil-barbeiro">
                <option>Quarta</option>
              </select>

              <input
                type="text"
                value="10:00:00"
                className="input-horario-pagina-perfil-barbeiro"
                readOnly
              />

              <input
                type="text"
                value="20:00:00"
                className="input-horario-pagina-perfil-barbeiro"
                readOnly
              />

              <button className="botao-remover-horario-pagina-perfil-barbeiro">
                X
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default PaginaPerfilBarbeiro