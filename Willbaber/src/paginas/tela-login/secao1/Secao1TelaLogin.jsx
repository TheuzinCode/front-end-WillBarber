import "./Secao1TelaLogin.css"
import Logo from "../../../imgs/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CiLock } from "react-icons/ci"; //icone cadeado
import { MdOutlineEmail } from "react-icons/md"; //icone email




const Secao1TelaLogin = () => {

  const navigate = useNavigate()
  const [cliente, setCliente] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const entrar = async (e) => {
    e.preventDefault();

    const clienteAuth = {
      email,
      senha
    };

    try {
      const response = await fetch("http://localhost:8080/willbarber/entrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(clienteAuth)
      });

      if (!response.ok) {
        throw new Error("Erro no login")
      }

      const data = await response.json();

      console.log("Login sucesso:", data)

      localStorage.setItem("clientAuth", JSON.stringify(data));

      navigate("/");

      window.location.reload();

    } catch(error) {
      console.error("Erro:", error);
      alert("Email ou senha inválidos");
    }
  }



  return (

    <div className="container-secao1-tela-login">
      <div>
        <img className="logo-secao1-tela-login" src={Logo} alt="Logo" />
      </div>
      <div>
        <div className="titulo-secao1-tela-login">
          Bem-vindo de volta
        </div>
        <div className="subtitulo-secao1-tela-login">
          Entre para acessar seu agendamentos
        </div>
      </div>
      <div className="campo-login-e-senha-tela-login">
        <div >
          <form onSubmit={entrar}>
            <div className="label-secao1-tela-login">
              <label className="label-secao1-tela-login">Email</label>
            </div>
            <div>
              <input className="input-secao1-tela-login" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="label-secao1-tela-login">
              <label className="label-secao1-tela-login">Senha</label>
            </div>
            <div>
              <input className="input-secao1-tela-login" type="password" id="password" name="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>
            <button className="botao-entrar-secao1-tela-login" type="submit">Entrar</button>
          </form>
        </div>

        <div className="texto-cadastrar-secao1-tela-login">
          Não tem uma conta? <Link className="link-cadastrar-secao1-tela-login" to="/criarconta">Cadastre-se</Link>
        </div>
      </div>

    </div>
  )
}

export default Secao1TelaLogin