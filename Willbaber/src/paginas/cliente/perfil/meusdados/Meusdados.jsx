import "./Meusdados.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menuperfil from "../menuperfil/menuperfil.jsx"
import MeusAgendamentos from "../componentes/agendamentos/Agendamentos.jsx"
import MeuPerfil from "../componentes/meuperfil/Meuperfil.jsx"

const Meusdados = () => {

    const [dadosCliente, setDadosCliente] = useState({});
    const [loading, setLoading] = useState(true);
    const [abaAtiva, setAbaAtiva] = useState("historico");
    const [todosAgendamentos, setTodosAgendamentos] = useState([]);
    const [agendamentosPassados, setAgendamentosPassados] = useState([]);
    const [agendamentosFuturos, setAgendamentosFuturos] = useState([]);

    useEffect(() => {

        async function carregarDados() {

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

                    setDadosCliente(data);

                } catch (error) {
                    console.error("ERRO AO CARREGAR OS DADOS", error);

                } finally {
                    setLoading(false);
                }
            }
        }

        carregarDados();

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


    }, []);

    if (loading) {
        return <h1>Carregando...</h1>;
    }

    return (
        <div className="container-geral-meusdados">

            <div className="container-meusdados">

                <div className="topo-meusdados">

                    <h1 className="titulo-meusdados">
                        Meu Perfil
                    </h1>
                    <Link to="/meus-agendamentos" className="ver-agendamentos-meusdados">
                        <button className="btn-agendamentos-meusdados">

                            Ver Agendamentos

                        </button>
                    </Link>

                </div>

                <div className="card-perfil-meusdados">

                    <div className="perfil-esquerda-meusdados">

                        <div className="avatar-meusdados">
                            {dadosCliente.nome?.charAt(0)}
                        </div>

                        <div className="perfil-info-meusdados">
                            <h2>{dadosCliente.nome}</h2>
                            <p>{dadosCliente.email}</p>
                        </div>
                    </div>
                    <div className="stats-meusdados">
                        <div className="stat-meusdados">
                            <h3>{todosAgendamentos.length}</h3>
                            <span>Atendimentos</span>
                        </div>
                        <div className="stat-meusdados">
                            <h3>{agendamentosFuturos.length}</h3>
                            <span>Agendados</span>
                        </div>
                        <div className="stat-meusdados">
                            <h3>{agendamentosPassados.length}</h3>
                            <span>Concluídos</span>
                        </div>
                        <div className="stat-meusdados">
                            <h3>{dadosCliente.pontos}</h3>
                            <span>Pontos</span>
                        </div>
                    </div>
                </div>

                <Menuperfil
                    abaAtiva={abaAtiva}
                    setAbaAtiva={setAbaAtiva}
                />

                {abaAtiva === "historico" && (
                    <MeusAgendamentos id={dadosCliente.id} />
                )}

                {abaAtiva === "perfil" && (
                    <MeuPerfil />
                )}

            </div>
        </div >
    );
};

export default Meusdados;