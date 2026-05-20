import "./FiltroMeusAgendamentos.css"
import { Link } from "react-router-dom";


const FiltroMeusAgendamentos = ({ abaAtiva, SetAbaAtiva }) => {
    return (
        <>
            {/* FILTROS */}
            <div className="barra-filtros">
                <div className="filtros">

                    <button className={abaAtiva === "todos" ? "botao-filtro ativo" : "botao-filtro"}
                        onClick={() => SetAbaAtiva("todos")}
                    >
                        Todos
                    </button>

                    <button className={abaAtiva === "proximos" ? "botao-filtro ativo" : "botao-filtro"}
                        onClick={() => SetAbaAtiva("proximos")}>
                        Próximos
                    </button>

                    <button className={abaAtiva === "passados" ? "botao-filtro ativo" : "botao-filtro"}
                        onClick={() => SetAbaAtiva("passados")}>
                        Passados
                    </button>

                </div>
                <Link to="/agendamento" className="texto-novo-agendamento">
                    <button className="botao-novo-agendamento">
                        <div className="texto-novo-agendamento"> + Novo Agendamento
                        </div>
                    </button>
                </Link>
            </div>
        </>
    )
}

export default FiltroMeusAgendamentos