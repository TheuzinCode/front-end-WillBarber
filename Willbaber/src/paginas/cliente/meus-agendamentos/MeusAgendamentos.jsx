import "./MeusAgendamentos.css"
import { useEffect, useState } from "react";
import Cabecalho from "../../../componentes/cabecalho/cabecalho"
import CardPerfilAgendamentos from "./card-perfil/CardPerfilAgendamentos"
import FiltroMeusAgendamentos from "./filtro-meus-agendamentos/FiltroMeusAgendamentos"
import TodosMeusAgendamentos from "./todos-agendamentos/TodosMeusAgendamentos"
import MeusAgendamentosPassados from "./passados-agendamentos/MeusAgendamentosPassados"
import MeusAgendamentosProximo from "./proximo-agendamentos/MeusAgendamentosProximo"

const MeusAgendamentos = () => {

    const [abaAtiva, setAbaAtiva] = useState("todos");
    const [todosAgendamentos, setTodosAgendamentos] = useState([]);
    const [agendamentosPassados, setAgendamentosPassados] = useState([]);
    const [agendamentosFuturos, setAgendamentosFuturos] = useState([]);
    const [cliente, setCliente] = useState(null);

    useEffect(() => {

        async function carregarTodosAgendamentos() {

            const clienteSalvo = localStorage.getItem("clientAuth");
            if (clienteSalvo) {
                const clienteObj = JSON.parse(clienteSalvo);

                try {
                    const resp = await fetch(
                        `http://localhost:8080/willbarber/agendamentos/${clienteObj.id}/todos-meus-agendamentos`
                    );
                    const data = await resp.json();
                    if (!resp.ok) {
                        console.log(data);
                        return;
                    }
                    setTodosAgendamentos(data);
                } catch (error) {
                    console.error("ERRO AO CARREGAR OS AGENDAMENTOS", error);
                }
            }


        }

        carregarTodosAgendamentos();

        async function carregarAgendamentosPassados() {
            const clienteSalvo = localStorage.getItem("clientAuth");
            if (clienteSalvo) {
                const clienteObj = JSON.parse(clienteSalvo);
                try {
                    const resp = await fetch(
                        `http://localhost:8080/willbarber/agendamentos/${clienteObj.id}/meus-agendamentos-concluidos`
                    );
                    const data = await resp.json();
                    if (!resp.ok) {
                        console.log(data);
                        return;
                    }
                    setAgendamentosPassados(data);
                } catch (error) {
                    console.error("ERRO AO CARREGAR OS AGENDAMENTOS PASSADOS", error);
                }
            }
        }
        carregarAgendamentosPassados();

        async function carregarAgendamentosFuturos() {
            const clienteSalvo = localStorage.getItem("clientAuth");
            if (clienteSalvo) {
                const clienteObj = JSON.parse(clienteSalvo);
                try {
                    const resp = await fetch(
                        `http://localhost:8080/willbarber/agendamentos/${clienteObj.id}/meus-agendamentos`
                    );
                    const data = await resp.json();
                    if (!resp.ok) {
                        console.log(data);
                        return;
                    }
                    setAgendamentosFuturos(data);
                } catch (error) {
                    console.error("ERRO AO CARREGAR OS AGENDAMENTOS FUTUROS", error);
                }
            }
        }
        carregarAgendamentosFuturos();

        async function BuscarCliente() {

            const clienteSalvo = localStorage.getItem("clientAuth");

            if (clienteSalvo) {
                const clienteObj = JSON.parse(clienteSalvo);
                try {
                    const resp = await fetch(
                        `http://localhost:8080/willbarber/perfil/${clienteObj.id}`
                    );
                    const data = await resp.json();
                    if (!resp.ok) {
                        console.log(data);
                        return;
                    }
                    setCliente(data);
                } catch (error) {
                    console.error("ERRO AO CARREGAR OS DADOS DO CLIENTE", error);
                }
            }
        }
        BuscarCliente();

    }, []);

    return (
        <>

            <Cabecalho estatico={true} />
            <div className="container-pagina-meus-agendamentos">
                <div className="layout-pagina-meus-agendamentos-topo">
                    <div className="titulo-pagina-meus-agendamentos-topo">
                        Meus Agendamentos
                    </div>
                    <div className="subtitulo-pagina-meus-agendamentos-topo">
                        Gerencie todos os seus agendamentos, reagende ou cancele quando precisar.
                    </div>
                </div>

                <CardPerfilAgendamentos
                    todosAgendamentos={todosAgendamentos}
                    agendamentosPassados={agendamentosPassados}
                    agendamentosFuturos={agendamentosFuturos}
                    cliente={cliente}
                />

                <FiltroMeusAgendamentos abaAtiva={abaAtiva} SetAbaAtiva={setAbaAtiva} />

                {abaAtiva === "todos" && (
                    <TodosMeusAgendamentos
                        todosAgendamentos={todosAgendamentos}
                    />
                )}
                {abaAtiva === "passados" && (
                    <MeusAgendamentosPassados
                        agendamentosPassados={agendamentosPassados}

                    />
                )}
                {abaAtiva === "proximos" && (
                    <MeusAgendamentosProximo
                        agendamentosFuturos={agendamentosFuturos}
                    />
                )}
            </div >


        </>
    )
}

export default MeusAgendamentos