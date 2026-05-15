import "./Meusdados.css";
import { useEffect, useState } from "react";
import Menuperfil from "../menuperfil/menuperfil.jsx"
import MeusAgendamentos from "../componentes/agendamentos/Agendamentos.jsx"

const Meusdados = () => {

    const [dadosCliente, setDadosCliente] = useState({});
    const [loading, setLoading] = useState(true);
    const [agedamentos, setAgendamentos] = useState([])

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

                    <button className="btn-agendamentos-meusdados">
                        Ver Agendamentos
                    </button>

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
                            <h3>4</h3>
                            <span>Atendimentos</span>
                        </div>
                        <div className="stat-meusdados">
                            <h3>2</h3>
                            <span>Agendados</span>
                        </div>
                        <div className="stat-meusdados">
                            <h3>2</h3>
                            <span>Concluídos</span>
                        </div>
                        <div className="stat-meusdados">
                            <h3>{dadosCliente.pontos}</h3>
                            <span>Pontos</span>
                        </div>
                    </div>
                </div>
                <Menuperfil />
                <MeusAgendamentos id={dadosCliente.id} />
            </div>
        </div>
    );
};

export default Meusdados;