import "./Meuperfil.css"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


const Meuperfil = () => {

    const [cliente, setCliente] = useState(null);

    const [nomeCliente, setNomeCliente] = useState("");
    const [emailCliente, setEmailCliente] = useState("");
    const [cpfCliente, setCpfCliente] = useState("");
    const [telefoneCliente, setTelefoneCliente] = useState("");
    const [senhaCliente, setSenhaCliente] = useState("");


    useEffect(() => {

        async function BuscarCliente() {

            const clienteSalvo = localStorage.getItem("clientAuth");
            if (clienteSalvo) {
                const clienteObj = JSON.parse(clienteSalvo);
                try {
                    const resp = await fetch(`
                        http://localhost:8080/willbarber/perfil/${clienteObj.id}`
                    );
                    const clienteData = await resp.json();
                    setCliente(clienteData);

                    setNomeCliente(clienteData.nome);
                    setEmailCliente(clienteData.email);
                    setCpfCliente(clienteData.CPF);
                    setTelefoneCliente(clienteData.Telfone);
                    setSenhaCliente(clienteData.Senha);
                } catch (error) {
                    console.error("ERRO AO CARREGAR O PERFIL DO CLIENTE", error);
                }

            }
        }
        BuscarCliente();
    }, []);

    const AtualizarPerfil = async () => {

        if (!cliente) return;

        const body = {
            nomeCompleto: nomeCliente,
            email: emailCliente,
            telefone: telefoneCliente,
            senha: senhaCliente
        };
        try {
            const resp = await fetch(`
                http://localhost:8080/willbarber/perfil/${cliente?.id}/atualizar`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );
            toast.success("Perfil atualizado com sucesso!");
            setTimeout(() => {
                window.location.reload();
            }, 800);

        } catch (error) {
            console.error("ERRO AO ATUALIZAR O PERFIL DO CLIENTE", error);
        }



    }

    return (
        <>
            <div className="container-pagina-meu-perfil">
                <div className="container">
                    <h1 className="titulo">
                        Dados Pessoais
                    </h1>

                    <div className="card">
                        <div className="perfil-topo">
                            <div className="avatar">
                                {cliente?.nome.charAt(0)}
                            </div>
                            <div className="perfil-info">
                                <h2>{cliente?.nome}</h2>
                                <p>{cliente?.email}</p>
                            </div>
                        </div>

                        <div className="layout-input-informacoes-meu-perfil">
                            <div className="grupo-input">
                                <label>Nome Completo</label>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        value={nomeCliente}
                                        onChange={(e) =>
                                            setNomeCliente(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="grupo-input">
                                <label>E-mail</label>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        value={emailCliente}
                                        onChange={(e) =>
                                            setEmailCliente(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="layout-input-informacoes-meu-perfil">
                            <div className="grupo-input">
                                <label>CPF</label>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        value={cpfCliente}
                                        readOnly
                                        onChange={(e) =>
                                            setCpfCliente(e.target.value)

                                        }
                                    />

                                </div>
                            </div>
                            <div className="grupo-input">
                                <label>Telefone</label>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        value={telefoneCliente}
                                        onChange={(e) =>
                                            setTelefoneCliente(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="grupo-input">
                            <label>Senha</label>
                            <div className="input-box">
                                <input
                                    type="password"
                                    value={senhaCliente}
                                    onChange={(e) =>
                                        setSenhaCliente(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <button className="btn-editar"
                            onClick={AtualizarPerfil}>
                            Editar Perfil
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Meuperfil