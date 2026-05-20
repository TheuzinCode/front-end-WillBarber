import "./Secao5TelaInicial.css"
import imagemBarbeiro from "../../../imgs/imagem-barbeiro-exemplo.png"
import ExemploCorte1 from "../../../imgs/Exemplo-corte-1.png"
import ExemploCorte2 from "../../../imgs/Exemplo-corte-2.png"
import ExemploCorte3 from "../../../imgs/Exemplo-corte-3.png"
import ExemploCorte4 from "../../../imgs/Exemplo-corte-4.png"


const Secao5TelaInicial = () => {
    return (
        <>

            <div className="container-secao5-tela-inicial">
                <div className="subtitulo-secao5-tela-inicial">
                    NOSSA GALERIA
                </div>
                <div className="titulo-secao5-tela-inicial">
                    Trabalhos Realizados
                </div>

                <div className="linha-separadora-secao5-tela-inicial"></div>

                <div className="grid-trabalhos-secao5-tela-inicial">
                    <div>
                        <img className="layout-imagens-corte" src={ExemploCorte1} alt="Barbeiro" />
                    </div>
                    <div>
                        <img className="layout-imagens-corte" src={ExemploCorte2} alt="Barbeiro" />
                    </div>
                    <div>
                        <img className="layout-imagens-corte" src={ExemploCorte3} alt="Barbeiro" />
                    </div>
                    <div>
                        <img className="layout-imagens-corte" src={ExemploCorte4} alt="Barbeiro" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Secao5TelaInicial