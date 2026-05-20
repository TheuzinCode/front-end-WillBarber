import "./CardPerfilAgendamentos.css"

const CardPerfilAgendamentos = ({ todosAgendamentos, agendamentosPassados, agendamentosFuturos, cliente }) => {

    
    return (
        <>
            {/* CARD PERFIL */}
            <div className="card-perfil-agendamento">
                <div className="lado-esquerdo-perfil">
                    <div className="avatar-perfil">
                         {cliente?.nome.charAt(0)}
                    </div>
                    <div >
                        <div className="nome-card-perfil-agendamento">{cliente?.nome}</div>
                        <div className="email-card-perfil-agendamento">{cliente?.email}</div>
                        
                    </div>
                </div>

                <div className="estatisticas-agendamento-card-perfil-agendamento">
                    <div className="item-estatistica-card-perfil-agendamento">
                        <div className="numeros-estatistica-card-perfil-agendamento">{agendamentosFuturos.length}</div>
                        <div className="titulo-estatistica-card-perfil-agendamento">Proximos</div>
                    </div>
                    <div className="linha-divisoria"></div>
                    <div className="item-estatistica-card-perfil-agendamento">
                        <div className="numeros-estatistica-card-perfil-agendamento">{agendamentosPassados.length}</div>
                        <div className="titulo-estatistica-card-perfil-agendamento">Concluido</div>
                    </div>
                    <div className="linha-divisoria"></div>
                    <div className="item-estatistica-card-perfil-agendamento">
                        <div className="numeros-estatistica-card-perfil-agendamento">{todosAgendamentos.length}</div>
                        <div className="titulo-estatistica-card-perfil-agendamento">Total</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardPerfilAgendamentos