import React from 'react'
import './Secao4TelaInicial.css'
import { useEffect, useState } from "react";
import imagemBarbeiro from "../../../imgs/imagem-barbeiro-exemplo.png"
import { IoMdStar } from "react-icons/io";//simbulo estrela


const Secao4TelaInicial = () => {

    const [barbeiros, setBarbeiros] = useState([])



    useEffect(() => {

        const listarBarbeiros = async () => {
            try {

                const resp = await fetch("http://localhost:8080/willbarber/agendamento/listar-todos-barbeiros")
                const data = await resp.json();
                setBarbeiros(data)
                console.log(data)

            } catch (erro) {
                console.log("error a buscar barbeiros", erro)
            }
        }
        listarBarbeiros();
    }, [])


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

                {barbeiros.map((barbeiros) => (
                    <div className='barbeiro-secao4-tela-inicial'
                        key={barbeiros.id}>
                        <img className='config-img-barbeiro-secao4-tela-inicial'
                            src={`data:image/jpeg;base64,${barbeiros.imagem}`}
                            alt={barbeiros.nome} />
                        <p className='nome-barbeiro-secao4-tela-inicial'>{barbeiros.nome}</p>
                        <p className='servicos-barbeiro-secao4-tela-inicial'>{barbeiros.descricao}</p>
                        <div className='campo-botao-selecionar-barbeiro-secao4-tela-inicial'>
                            <button className='botao-selecionar-barbeiro-secao4-tela-inicial'>Selecionar</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Secao4TelaInicial