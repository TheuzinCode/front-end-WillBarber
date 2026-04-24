import React from 'react'
import './Secao4TelaInicial.css'
import imagemBarbeiro from "../../../imgs/imagem-barbeiro-exemplo.png"
import { IoMdStar } from "react-icons/io";//simbulo estrela

const Secao4TelaInicial = () => {
    return (
        <div className='container-secao4-tela-inicial'>
            <div className='subtitulo-secao4-tela-inicial'>
                CONHEÇA A EQUIPE
            </div>
            <div className='titulo-secao4-tela-inicial'>
                Nossos Barbeiros
            </div>
            <div className='linha-separadora-secao4-tela-inicial'>
            </div>

            <div className='grid-barbeiros-secao4-tela-inicial'>
                
                <div className='barbeiro-secao4-tela-inicial'>
                    <img className='config-img-barbeiro-secao4-tela-inicial' src={imagemBarbeiro} alt="Barbeiro 1" />
                    <p className='nome-barbeiro-secao4-tela-inicial'>William Santos</p>
                    <p className='servicos-barbeiro-secao4-tela-inicial'>Corte Classico & Barba</p>
                    <div className='layout-caracteristca-barbeiro-secao4-tela-inicial'>
                        <div className='avalicao-babeiro-secao4-tela-inicial'>
                            <p><IoMdStar color='#C3A144' size={23} /></p>
                            <p className='numero-avaliacao-barbeiro-secao4-tela-inicial' >4.9</p>
                        </div>
                        <div>
                            <p className='anos-de-experiencia-barbeiro-secao4-tela-inicial'>8 anos</p>
                        </div>
                    </div>
                    <div className='campo-botao-selecionar-barbeiro-secao4-tela-inicial'>
                        <button className='botao-selecionar-barbeiro-secao4-tela-inicial'>Selecionar</button>
                    </div>
                </div>

                 <div className='barbeiro-secao4-tela-inicial'>
                    <img className='config-img-barbeiro-secao4-tela-inicial' src={imagemBarbeiro} alt="Barbeiro 1" />
                    <p className='nome-barbeiro-secao4-tela-inicial'>William Santos</p>
                    <p className='servicos-barbeiro-secao4-tela-inicial'>Corte Classico & Barba</p>
                    <div className='layout-caracteristca-barbeiro-secao4-tela-inicial'>
                        <div className='avalicao-babeiro-secao4-tela-inicial'>
                            <p><IoMdStar color='#C3A144' size={23} /></p>
                            <p className='numero-avaliacao-barbeiro-secao4-tela-inicial' >4.9</p>
                        </div>
                        <div>
                            <p className='anos-de-experiencia-barbeiro-secao4-tela-inicial'>8 anos</p>
                        </div>
                    </div>
                    <div className='campo-botao-selecionar-barbeiro-secao4-tela-inicial'>
                        <button className='botao-selecionar-barbeiro-secao4-tela-inicial'>Selecionar</button>
                    </div>
                </div>

                 <div className='barbeiro-secao4-tela-inicial'>
                    <img className='config-img-barbeiro-secao4-tela-inicial' src={imagemBarbeiro} alt="Barbeiro 1" />
                    <p className='nome-barbeiro-secao4-tela-inicial'>William Santos</p>
                    <p className='servicos-barbeiro-secao4-tela-inicial'>Corte Classico & Barba</p>
                    <div className='layout-caracteristca-barbeiro-secao4-tela-inicial'>
                        <div className='avalicao-babeiro-secao4-tela-inicial'>
                            <p><IoMdStar color='#C3A144' size={23} /></p>
                            <p className='numero-avaliacao-barbeiro-secao4-tela-inicial' >4.9</p>
                        </div>
                        <div>
                            <p className='anos-de-experiencia-barbeiro-secao4-tela-inicial'>8 anos</p>
                        </div>
                    </div>
                    <div className='campo-botao-selecionar-barbeiro-secao4-tela-inicial'>
                        <button className='botao-selecionar-barbeiro-secao4-tela-inicial'>Selecionar</button>
                    </div>
                </div>

                 <div className='barbeiro-secao4-tela-inicial'>
                    <img className='config-img-barbeiro-secao4-tela-inicial' src={imagemBarbeiro} alt="Barbeiro 1" />
                    <p className='nome-barbeiro-secao4-tela-inicial'>William Santos</p>
                    <p className='servicos-barbeiro-secao4-tela-inicial'>Corte Classico & Barba</p>
                    <div className='layout-caracteristca-barbeiro-secao4-tela-inicial'>
                        <div className='avalicao-babeiro-secao4-tela-inicial'>
                            <p><IoMdStar color='#C3A144' size={23} /></p>
                            <p className='numero-avaliacao-barbeiro-secao4-tela-inicial' >4.9</p>
                        </div>
                        <div>
                            <p className='anos-de-experiencia-barbeiro-secao4-tela-inicial'>8 anos</p>
                        </div>
                    </div>
                    <div className='campo-botao-selecionar-barbeiro-secao4-tela-inicial'>
                        <button className='botao-selecionar-barbeiro-secao4-tela-inicial'>Selecionar</button>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Secao4TelaInicial