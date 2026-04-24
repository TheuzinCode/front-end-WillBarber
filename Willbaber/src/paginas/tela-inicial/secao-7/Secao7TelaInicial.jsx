import "./Secao7TelaInicial.css"
import { CiLocationOn } from "react-icons/ci";//icone local
import { IoTimeOutline } from "react-icons/io5";//icone relogio
import { FaPhone } from "react-icons/fa6";//icone telefone
import { FaInstagram } from "react-icons/fa6";//icone instagram

const Secao7TelaInicial = () => {
    return (
        <div>
            <div className="container-secao7-tela-inicial">
                <div>
                    <div className="subtitulo-secao7-tela-inicial">
                        VISITE-NOS
                    </div>
                    <div className="titulo-secao7-tela-inicial">
                        Onde Estamos
                    </div>

                    <div className="linha-separadora-secao7-tela-inicial"></div>

                    <div>
                        <div className="campo-local-secao7-tela-inicial">
                            <div className="icone-local-secao7-tela-inicial">
                                    <CiLocationOn size={30} />
                            </div>
                            <div>
                                <div className="subtitulo-local-secao7-tela-inicial">
                                    Endereço
                                </div>
                                <div className="titulo-local-secao7-tela-inicial">
                                    Av. Paulista, 1578 — Bela Vista, São Paulo - SP
                                </div>
                            </div>
                        </div>

                        <div className="campo-local-secao7-tela-inicial">
                            <div className="icone-local-secao7-tela-inicial">
                                    <IoTimeOutline size={30} />
                            </div>
                            <div>
                                <div className="subtitulo-local-secao7-tela-inicial">
                                    Horário de Funcionamento
                                </div>
                                <div className="titulo-local-secao7-tela-inicial">
                                    Seg–Sex: 9h–20h | Sáb: 8h–18h | Dom: Fechado
                                </div>
                            </div>
                        </div>

                        <div className="campo-local-secao7-tela-inicial">
                            <div className="icone-local-secao7-tela-inicial">
                                    <FaPhone size={25} />
                            </div>
                            <div>
                                <div className="subtitulo-local-secao7-tela-inicial">
                                    Telefone / WhatsApp
                                </div>
                                <div className="titulo-local-secao7-tela-inicial">
                                    (11) 9 8765-4321
                                </div>
                            </div>
                        </div>

                        <div className="campo-local-secao7-tela-inicial">
                            <div className="icone-local-secao7-tela-inicial">
                                    <FaInstagram size={30} />
                            </div>
                            <div>
                                <div className="subtitulo-local-secao7-tela-inicial">
                                   Instagram
                                </div>
                                <div className="titulo-local-secao7-tela-inicial">
                                    @willbarber.sp
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="botao-agendar-secao7-tela-inicial">
                        Agendar Meu Horário
                    </div>
                </div>

                <div>
                    <iframe
                        className="maps-secao7-tela-inicial"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1973529954835!2d-46.6564943!3d-23.5613545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1776866818336!5m2!1spt-BR!2sbr"
                        width="750"
                        height="600"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>
        </div>
    )
}

export default Secao7TelaInicial