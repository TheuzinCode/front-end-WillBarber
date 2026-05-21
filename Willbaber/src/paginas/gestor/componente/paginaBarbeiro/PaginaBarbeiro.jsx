import "./PaginaBarbeiro.css"
import ModalBarbeiro from "../modalBarbeiro/ModalBarbeiro";
import { useState } from "react";


const PaginaBarbeiro = ({gestor}) => {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>

      <div className="pagina-barbeiros">

        {/*<!-- TOPO -->*/}

        <div className="topo-barbeiros">
          <div>
            <h1 className="titulo-barbeiros">
              Gestão de Barbeiros
            </h1>
            <p className="subtitulo-barbeiros">
              Cadastre e gerencie os profissionais da barbearia
            </p>
          </div>
          <div className="acoes-topo-barbeiros">
            <button className="botao-ver-site">
              Ver site
            </button>
            <div className="avatar-admin">
             {gestor?.nomeCompleto.charAt(0)}
            </div>
          </div>
        </div>

        {/*<!-- TOPO -->*/}

        <div className="barra-superior-barbeiros">
          <div className="informacoes-barbeiros">
            <span className="quantidade-barbeiros">
              4 barbeiros
            </span>
          </div>
          <button
            className="botao-cadastrar-barbeiro"
            onClick={() => setModalAberto(true)}
          >
            + Cadastrar Barbeiro
          </button>
        </div>

        {/*<!-- TOPO -->*/}

        <div className="grid-barbeiros">

          {/*<!-- CARD -->*/}

          <div className="card-barbeiro">
            <div className="topo-card-barbeiro">
              <div className="informacoes-principais-barbeiro">
                <img
                  className="foto-barbeiro"
                  src="https://i.pravatar.cc/150?img=12"
                />
                <div>
                  <h2 className="nome-barbeiro">
                    William Santos
                  </h2>
                  <p className="especialidade-barbeiro">
                    Corte Clássico & Barba
                  </p>
                  <div className="detalhes-barbeiro">
                    <span>◷ 8 anos</span>
                    <span>☏ (11) 90000-0000</span>
                  </div>
                </div>
              </div>
              <div className="avaliacao-barbeiro">
                ⭐ 4.9
                <span>(312)</span>
              </div>
            </div>

            <div className="linha-dias">
              <div className="status-online"></div>
              <div className="dias-trabalho">
                <span>Seg</span>
                <span>Ter</span>
                <span>Qua</span>
                <span>Qui</span>
                <span>Sex</span>
                <span>Sáb</span>
              </div>
            </div>
            <p className="descricao-barbeiro">
              Especialista em corte clássico & barba, com 8 anos de experiência.
            </p>
            <div className="rodape-card-barbeiro">
              <button className="botao-editar-barbeiro">
                ✏ Editar
              </button>

              <button className="botao-desativar-barbeiro">
                ◉ Desativar
              </button>

              <button className="botao-excluir-barbeiro">
                🗑
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalAberto && (
        <ModalBarbeiro
          fecharModal={() => setModalAberto(false)}
        />
      )}

    </>
  )
}

export default PaginaBarbeiro