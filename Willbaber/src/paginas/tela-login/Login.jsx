import React from 'react'
import Cabecalho from "../../componentes/cabecalho/cabecalho";
import Secao1TelaLogin from "./secao1/Secao1TelaLogin";

const Login = () => {
  return (
    <>
      <Cabecalho estatico={true}  />

      <Secao1TelaLogin />
      
    </>
   
  )
}

export default Login