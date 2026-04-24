import "./Secao2TelaInicial.css";
import { BsScissors } from "react-icons/bs";
import { PiMedal } from "react-icons/pi";
import { RiShieldCheckFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";


function Secao2TelaInicial() {
    return (
        <>
            <div className="container-secao2-tela-inicial">
                <div className="campo-topicos-secao2-tela-inicial">
                    <div className="layout-secao2-tela-inicial">
                        <div className="icones-secao2-tela-inicial">
                            <BsScissors />
                        </div>
                        <div className="texto-topicos-secao2-tela-inicial">
                            Cortes Modernos e Clássicos
                        </div>
                    </div>
                    <div className="layout-secao2-tela-inicial">
                        <div className="icones-secao2-tela-inicial">
                            <PiMedal />
                        </div>
                        <div className="texto-topicos-secao2-tela-inicial">
                            Barbeiros Certificados
                        </div>
                    </div>
                    <div className="layout-secao2-tela-inicial">
                        <div className="icones-secao2-tela-inicial">
                            <RiShieldCheckFill />
                        </div>
                        <div className="texto-topicos-secao2-tela-inicial">
                            Produtos Premium Importados
                        </div>
                    </div>
                    <div className="layout-secao2-tela-inicial">
                        <div className="icones-secao2-tela-inicial">
                            <FaLocationDot />
                        </div>
                        <div className="texto-topicos-secao2-tela-inicial">
                            Av. Paulista, 1578 — São Paulo
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Secao2TelaInicial;