import MeusDadosComponentes from "./meusdados/Meusdados.jsx"
import Cabecalho from "../../../componentes/cabecalho/cabecalho"
import Menuperfil from "./menuperfil/menuperfil.jsx"
import MeusAgendamentos from "./componentes/agendamentos/Agendamentos.jsx"

const TelaPerfil = () => {
  return (
   <>   
        <Cabecalho estatico={true}/>
        <MeusDadosComponentes />
   </>
  )
}

export default TelaPerfil