import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./secao1CriarConta.css"


const secao1CriarConta = () => {

    const navigate = useNavigate()
    const [nomeCompleto, setNomeCompleto] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [cpf, setCpf] = useState("")
    const [senha, setSenha] = useState("")


    const criarConta = async (e) => {
        e.preventDefault();

        if (!nomeCompleto || !email || !telefone || !cpf || !senha) {
            alert("Por favor, preencha todos os campos");
            return;
        }

        const horarios = [
            {
                diaSemana: "MONDAY",
                horaInicio: "18:00",
                horaFim: "20:00"
            }
        ];

        const clienteData = {
            nome: nomeCompleto,
            email,
            numero: telefone,
            cpf,
            senha,
            tipo: "CLIENTE",
            horarios
        };

        try {
            const response = await fetch("http://localhost:8080/willbarber/criarUsuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(clienteData)
            });

            if (!response.ok) {
                throw new Error("Erro ao cadastrar login");
            }

            const data = await response.json();

            console.log("cadastrado sucesso:", data)

            navigate("/login");

        } catch (error) {
            console.error("Erro ao cadastrar login:", error);
            alert("Erro ao cadastrar login. Por favor, tente novamente.");
        }
    }

    return (
        <>
            <div className="container-secao1-criar-conta">
                <div>
                    <div className="titulo-secao1-criar-conta">
                        Criar Conta
                    </div>
                    <div className="subtitulo-secao1-criar-conta">
                        Junte-se à Will Barber
                    </div>
                </div>
                <div className="campo-login-e-senha-criar-conta">
                    <div >
                        <form onSubmit={criarConta}>
                            <div className="label-secao1-criar-conta">
                                <label className="label-secao1-criar-conta">Nome Completo</label>
                            </div>
                            <div>
                                <input className="input-secao1-criar-conta" type="text" id="nomeCompleto" name="nomeCompleto" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />
                            </div>

                            <div className="label-secao1-criar-conta">
                                <label className="label-secao1-criar-conta">CPF</label>
                            </div>
                            <div>
                                <input className="input-secao1-criar-conta" type="text" id="cpf" name="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                            </div>

                            <div className="label-secao1-criar-conta">
                                <label className="label-secao1-criar-conta">Email</label>
                            </div>
                            <div>
                                <input className="input-secao1-criar-conta" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="label-secao1-criar-conta">
                                <label className="label-secao1-criar-conta">Telefone</label>
                            </div>
                            <div>
                                <input className="input-secao1-criar-conta" type="text" id="telefone" name="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                            </div>

                            <div className="label-secao1-criar-conta">
                                <label className="label-secao1-criar-conta">Senha</label>
                            </div>
                            <div>
                                <input className="input-secao1-criar-conta" type="password" id="password" name="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                            </div>

                            <button className="botao-entrar-secao1-criar-conta" type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default secao1CriarConta;