import "./Rodape.css"
import Logo from "../../imgs/logo.png";
import { FaInstagram } from "react-icons/fa6";//icone instagram
import { FaWhatsapp } from "react-icons/fa"; //icone WhatsApp
import { FaFacebook } from "react-icons/fa"; //icone facebook

const rodape = () => {
    return (
        <>
            <div className="container-rodape">
                <div className="nome-barber-rodape">
                    <div className="logo-rodape">
                        <img className="logo-rodape" src={Logo} alt="Logo" />
                    </div>
                    <div className="texto-nome-barber-rodape">
                        WILL BARBER
                    </div>
                </div>

                <div className="texto-diretos-willbarber">
                    © 2026 Will Barber. Todos os direitos reservados.
                </div>

                <div className="container-icones-rede-sociais">
                    <div className="icone-redes-sociais">
                        <FaInstagram size={25}/>
                    </div>
                    <div className="icone-redes-sociais">
                        <FaFacebook size={25}/>
                    </div>
                    <div className="icone-redes-sociais">
                        <FaWhatsapp size={25} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default rodape