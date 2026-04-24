import "./Secao6TelaInicial.css"
import { IoMdStar } from "react-icons/io";//simbulo estrela

const Secao6TelaInicial = () => {
    return (
        <>
            <div className="container-secao6-tela-inicial">
                <div className="subtitulo-secao6-tela-inicial">
                    DEPOIMENTOS
                </div>
                <div className="titulo-secao6-tela-inicial">
                    O Que Dizem Nossos Clientes
                </div>

                <div className="linha-separadora-secao6-tela-inicial"></div>


                <div className="grid-depoimentos-secao6-tela-inicial">

                    <div className="layout-depoimento-secao6-tela-inicial">
                        <div>
                            <p><IoMdStar color='#C3A144' size={23} />
                                <IoMdStar color='#C3A144' size={23} />
                                <IoMdStar color='#C3A144' size={23} />
                                <IoMdStar color='#C3A144' size={23} />
                                <IoMdStar color='#C3A144' size={23} />
                            </p>
                        </div>
                        <div className="texto-depoimento-secao6-tela-inicial">
                            <i>"Melhor barbearia de SP! O Will é um artista, sai de lá me sentindo outro. Recomendo demais para quem busca qualidade."</i>
                        </div>
                        <div className="usuario-depoimento-secao6-tela-inicial">
                            <div className="foto-usuario-depoimento-secao6-tela-inicial">
                                M
                            </div>
                            <div className="nome-usuario-depoimento-secao6-tela-inicial">
                                <h3>Marcos Oliveira</h3>
                            </div>
                        </div>
                    </div>

                    <div className="layout-depoimento-secao6-tela-inicial">
                        <div>
                            <p><IoMdStar color='#C3A144' size={23} />
                                <IoMdStar color='#C3A144' size={23} />
                                <IoMdStar color='#C3A144' size={23} />
                                <IoMdStar color='#C3A144' size={23} />
                                <IoMdStar color='#C3A144' size={23} />
                            </p>
                        </div>
                        <div className="texto-depoimento-secao6-tela-inicial">
                           <i>“Atendimento impecável, ambiente premium e resultado incrível. Já sou cliente fiel há 2 anos. Não troco por nada.”</i> 
                        </div>
                        <div className="usuario-depoimento-secao6-tela-inicial">
                            <div className="foto-usuario-depoimento-secao6-tela-inicial">
                                J
                            </div>
                            <div className="nome-usuario-depoimento-secao6-tela-inicial">
                                <h3>João Pedro Costa</h3>
                            </div>
                        </div>
                    </div>

                    <div className="layout-depoimento-secao6-tela-inicial">
                        <div>
                            <p><IoMdStar color='#C3A144' size={23} />
                                <IoMdStar color='#C3A144' size={23} />
                                <IoMdStar color='#C3A144' size={23} />
                                <IoMdStar color='#C3A144' size={23} />
                                <IoMdStar color='#C3A144' size={23} />
                            </p>
                        </div>
                        <div className="texto-depoimento-secao6-tela-inicial">
                            <i>“Agendamento fácil pelo app, pontualidade total e corte perfeito. Exatamente o que eu precisava para o dia a dia.”</i>
                        </div>
                        <div className="usuario-depoimento-secao6-tela-inicial">
                            <div className="foto-usuario-depoimento-secao6-tela-inicial">
                                A
                            </div>
                            <div className="nome-usuario-depoimento-secao6-tela-inicial">
                                <h3>André Rodrigues</h3>
                            </div>
                        </div>
                    </div>
            
                </div>
            </div>
        </>

    )
}

export default Secao6TelaInicial