import "./Secao3TelaInicial.css";
import { RiMenLine } from "react-icons/ri";// simbulo masculino
import { BsScissors } from "react-icons/bs";// simbulo tesoura
import { IoMdTime } from "react-icons/io";//icone relogio
import { FaRegStar } from "react-icons/fa";//simbulo estrela
import { FiDroplet } from "react-icons/fi";//simbulo gota de agua
import { LuPaintRoller } from "react-icons/lu"; //simbulo rolo de pintura
import { FaRegEye } from "react-icons/fa"; //simbulo olho

function Secao3TelaInicial() {
    return (
        <>
            <div className="container-secao3-tela-inicial">
                <div>
                    <div>
                        <p className="subtitulo-secao3-tela-inicial">O QUE OFERECEMOS</p>
                    </div>
                    <div className="titulo-secao3-tela-inicial" >
                        <p className="titulo-secao3-tela-inicial">Nossos Serviços</p>
                    </div>
                </div>
                <div className="linha-separadora-secao3-tela-inicial">
                </div>

                <div className="grid-servicos-secao3-tela-inicial">
                    <div className="servico-secao3-tela-inicial">
                        <p className="textpopular-servico-secao3-tela-inicial">Popular</p>
                        <p className="icone-servico-secao3-tela-inicial"><BsScissors /></p>
                        <p className="titulo-servico-secao3-tela-inicial">Corte de Cabelo</p>
                        <p className="descricao-servico-secao3-tela-inicial">Corte clássico ou moderno com acabamento perfeito</p>
                        <div className="layout-preco-tempo-secao3-tela-inicial">
                            <p className="preco-servico-secao3-tela-inicial">R$ 45,00</p>
                            <p className="tempo-servico-secao3-tela-inicial"> <IoMdTime />30 min</p>
                        </div>
                    </div>

                    <div className="servico-secao3-tela-inicial">
                        <p className="textpopular-servico-secao3-tela-inicial">Popular</p>
                        <p className="icone-servico-secao3-tela-inicial"><RiMenLine /></p>
                        <p className="titulo-servico-secao3-tela-inicial">Barba</p>
                        <p className="descricao-servico-secao3-tela-inicial">Aparo e modelagem com navalha e produtos premium</p>
                        <div className="layout-preco-tempo-secao3-tela-inicial">
                            <p className="preco-servico-secao3-tela-inicial">R$ 35,00</p>
                            <p className="tempo-servico-secao3-tela-inicial"> <IoMdTime />30 min</p>
                        </div>
                    </div>

                    <div className="servico-secao3-tela-inicial">
                        <p className="textpopular-servico-secao3-tela-inicial">Popular</p>
                        <p className="icone-servico-secao3-tela-inicial"><FaRegStar /></p>
                        <p className="titulo-servico-secao3-tela-inicial">Corte + Barba</p>
                        <p className="descricao-servico-secao3-tela-inicial">Combo completo com desconto especial</p>
                        <div className="layout-preco-tempo-secao3-tela-inicial">
                            <p className="preco-servico-secao3-tela-inicial">R$ 70,00</p>
                            <p className="tempo-servico-secao3-tela-inicial"> <IoMdTime />55 min</p>
                        </div>
                    </div>

                    <div className="servico-secao3-tela-inicial">
                        <p className="textpopular-servico-secao3-tela-inicial-sem-nada"></p>
                        <p className="icone-servico-secao3-tela-inicial"><FiDroplet /></p>
                        <p className="titulo-servico-secao3-tela-inicial">Hidratação Capilar</p>
                        <p className="descricao-servico-secao3-tela-inicial">Tratamento profundo para cabelos danificados</p>
                        <div className="layout-preco-tempo-secao3-tela-inicial">
                            <p className="preco-servico-secao3-tela-inicial">R$ 55,00</p>
                            <p className="tempo-servico-secao3-tela-inicial"> <IoMdTime />40 min</p>
                        </div>
                    </div>

                    <div className="servico-secao3-tela-inicial">
                        <p className="textpopular-servico-secao3-tela-inicial-sem-nada"></p>
                        <p className="icone-servico-secao3-tela-inicial"><LuPaintRoller /></p>
                        <p className="titulo-servico-secao3-tela-inicial">Pigmentação de Barba</p>
                        <p className="descricao-servico-secao3-tela-inicial">Cobertura de fios brancos com pigmento natual</p>
                        <div className="layout-preco-tempo-secao3-tela-inicial">
                            <p className="preco-servico-secao3-tela-inicial">R$ 60,00</p>
                            <p className="tempo-servico-secao3-tela-inicial"> <IoMdTime />45 min</p>
                        </div>
                    </div>

                    <div className="servico-secao3-tela-inicial">
                        <p className="textpopular-servico-secao3-tela-inicial-sem-nada"></p>
                        <p className="icone-servico-secao3-tela-inicial"><FaRegEye /></p>
                        <p className="titulo-servico-secao3-tela-inicial">Sobrancelha</p>
                        <p className="descricao-servico-secao3-tela-inicial">Design e modelagem de sobrancelha masculina</p>
                        <div className="layout-preco-tempo-secao3-tela-inicial">
                            <p className="preco-servico-secao3-tela-inicial">R$ 20,00</p>
                            <p className="tempo-servico-secao3-tela-inicial"> <IoMdTime />15 min</p>
                        </div>
                    </div>
                </div>

                <div className="botao-agendar-servico-secao3-tela-inicial">
                    Agendar Serviço
                </div>
                
            </div>
        </>
    );
}
export default Secao3TelaInicial;