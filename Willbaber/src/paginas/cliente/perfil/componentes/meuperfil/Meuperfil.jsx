import "./Meuperfil.css"

const Meuperfil = () => {
    return (
        <>
            <div className="container-pagina-meu-perfil">
                <div className="container">
                    <h1 className="titulo">
                        Dados Pessoais
                    </h1>

                    <div className="card">
                        <div className="perfil-topo">
                            <div className="avatar">
                                T
                            </div>
                            <div className="perfil-info">
                                <h2>Teste</h2>
                                <p>teste@teste.com</p>
                            </div>
                        </div>

                    <div className="layout-input-informacoes-meu-perfil">
                        <div className="grupo-input">
                            <label>Nome Completo</label>
                            <div className="input-box">
                                
                                <input
                                    type="text"
                                    value="Teste"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="grupo-input">
                            <label>E-mail</label>
                            <div className="input-box">
                                <input
                                    type="text"
                                    value="teste@gmail.com"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>

                    <div className="layout-input-informacoes-meu-perfil">
                        <div className="grupo-input">
                            <label>CPF</label>
                            <div className="input-box">
                                
                                <input
                                    type="text"
                                    value="123.456.789-10"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="grupo-input">
                            <label>Telefone</label>
                            <div className="input-box">
                                <input
                                    type="text"
                                    value="(11) 99999-9999"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                        

                        <div className="grupo-input">
                            <label>Senha</label>
                            <div className="input-box">
                                <i className="fa-regular fa-envelope"></i>
                                <input
                                    type="password"
                                    value="12345"
                                    readOnly
                                />
                            </div>
                        </div>

                        <button className="btn-editar">
                            Editar Perfil
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Meuperfil