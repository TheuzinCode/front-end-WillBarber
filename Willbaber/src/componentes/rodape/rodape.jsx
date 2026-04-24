import "./Rodape.css"
import Logo from "../../imgs/logo.png";

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

                <div>
                    © 2026 Will Barber. Todos os direitos reservados.
                </div>

                <div>
                    <div>
                        icone instagram
                    </div>
                    <div>
                        icone facebook
                    </div>
                    <div>
                        icone whatsapp
                    </div>
                </div>
            </div>
        </>
    )
}

export default rodape