import './Secao1TelaInicial.css'
import logo from "../../../imgs/logo.png"
import { Link } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";
import { IoStar } from "react-icons/io5";


function Secao1TelaInicial() {
    return (
        <>
            <div className='container-secao1'>
                <div className='imagem-background'>
                    <div className='logo-barber-secao1'>
                        <img className='layot-img-logo-secao1' src={logo} alt="Logo Barber" />
                    </div>
                    <div className='conteudo-texto-secao1'>
                        <h1 className='texto-subtitulo-secao1'>BARBEARIA PREMUIM</h1>
                        <h1 className='texto-titulo-secao1'>Will Barber</h1>
                        <p className='texto-descricao-secao1'>Experimente o melhor em cuidados masculinos. Cortes precisos, <br />
                            barbas impecáveis e uma experiência única em São Paulo.</p>
                        <div className='campo-agendar-e-criar-conta-secao1'>
                            <div className='layout-agendar-secao1'>
                                <Link to="/" className="botao-agendar-secao1">
                                    <CiCalendar className='icone-calendario' />
                                    Agendar horario
                                </Link>
                            </div>
                            <div>
                                <div>
                                    <Link to="/" className="botao-criar-conta-secao1">
                                        Criar Conta
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='layout-caracteristicas-secao1'>
                            <div>
                                <div className='titulo-caracterisitcas-secao1'>
                                    500+
                                </div>
                                <div className='subtitulo-caracterisitcas-secao1'>
                                    Clientes
                                </div>
                            </div>
                            <div>
                                <div className='titulo-caracterisitcas-secao1'>
                                    8+
                                </div>
                                <div className='subtitulo-caracterisitcas-secao1'>
                                    Anos de Experiência
                                </div>
                            </div>
                            <div>
                                <div className='titulo-caracterisitcas-secao1'>
                                    4.9 <IoStar className='estrala-avaliacao-secao1' />
                                </div>
                                <div className='subtitulo-caracterisitcas-secao1'>
                                    Avaliação Média
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Secao1TelaInicial