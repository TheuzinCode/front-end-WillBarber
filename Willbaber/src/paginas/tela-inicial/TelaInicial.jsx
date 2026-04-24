import { useEffect, useState } from "react";
import Cabecalho from "../../componentes/cabecalho/cabecalho.jsx";
import Secao1TelaInicial from "./secao-1/Secao1TelaInicial.jsx";
import Secao2TelaInicial from "./secao-2/Secao2TelaInicial.jsx";
import Secao3TelaInicial from "./secao-3/Secao3TelaInicial.jsx";
import Secao4TelaInicial from "./secao-4/Secao4TelaInicial.jsx";
import Secao5TelaInicial from "./secao-5/Secao5TelaInicial.jsx";
import Secao6TelaInicial from "./secao-6/Secao6TelaInicial.jsx";
import Secao7TelaInicial from "./secao-7/Secao7TelaInicial.jsx";
import Rodape from "../../componentes/rodape/Rodape.jsx";

function Telainicial() {

      const [cliente, setCliente] = useState(null);

    useEffect(() => {
        const userStorage = localStorage.getItem("clientAuth");
        if (userStorage) {
            setCliente(JSON.parse(userStorage));
        }
    }, []);

    return (
        <>
            <Cabecalho estatico={false} cliente={cliente} />

            <Secao1TelaInicial />

            <Secao2TelaInicial />

            <Secao3TelaInicial />

            <Secao4TelaInicial />

            <Secao5TelaInicial />

            <Secao6TelaInicial />

            <Secao7TelaInicial />

            <Rodape />
        </>
    )
}

export default Telainicial;