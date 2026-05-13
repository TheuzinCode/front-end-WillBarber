import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../imgs/logo.png";
import "./cabecalho.css";

function cabecalho({ estatico }) {

    const [cliente, setCliente] = useState(null);

    useEffect(() => {
        const userStorage = localStorage.getItem("clientAuth");
        if (userStorage) {
            setCliente(JSON.parse(userStorage));
        }
    }, []);


    const [ativo, setAtivo] = useState(estatico);

    useEffect(() => {

        if (estatico) return;

        const escutarScroll = () => {
            if (window.scrollY > 10) {
                setAtivo(true);
            } else {
                setAtivo(false);
            }
        };

        window.addEventListener("scroll", escutarScroll);

        return () => window.removeEventListener("scroll", escutarScroll);
    }, [estatico]);

    return (
        <>
            <header className={`container-cabecalho ${ativo ? "cabecalho-ativo" : ""}`}>
                <div>
                    <div className="container-cabecalho">
                        <div className="nome-barber">
                            <Link to="/" className="texto-nome-barber" style={{ textDecoration: 'none', display: 'flex' }}>
                                <div className="logo-cabecalho">
                                    <img className="logo-cabecalho" src={Logo} alt="Logo" />
                                </div>

                                <div className="texto-nome-barber">
                                    WILL BARBER
                                </div>
                            </Link>


                        </div>
                        <div className="container-navbar-cabecalho">
                            <Link to="/" className="texto-navbar">
                                Inicio
                            </Link>
                            <Link to="/Barbeiros" className="texto-navbar">
                                Barbeiros
                            </Link>


                            {cliente ? (
                                <>

                                    <div className="inicial-cliente-cabecalho" >
                                        {cliente.nome.charAt(0)}
                                    </div>
                                    <div>
                                        <Link to="/Perfil" className="texto-navbar-cliente-logado">
                                            Olá, {cliente.nome}
                                        </Link>
                                    </div>


                                </>

                            ) : (
                                <>
                                    <Link to="/Login" className="texto-navbar">
                                        Entrar
                                    </Link>
                                    <Link to="/Agendar" className="texto-navbar-botao">
                                        Agendar Agora
                                    </Link>
                                </>

                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default cabecalho;