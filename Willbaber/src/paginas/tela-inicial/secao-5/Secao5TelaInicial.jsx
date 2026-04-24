import "./Secao5TelaInicial.css"
import imagemBarbeiro from "../../../imgs/imagem-barbeiro-exemplo.png"

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
                        <img src={imagemBarbeiro} alt="Barbeiro" />
                    </div>
                    <div>
                        <img src={imagemBarbeiro} alt="Barbeiro" />
                    </div>
                    <div>
                        <img src={imagemBarbeiro} alt="Barbeiro" />
                    </div>
                    <div>
                        <img src={imagemBarbeiro} alt="Barbeiro" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Secao5TelaInicial