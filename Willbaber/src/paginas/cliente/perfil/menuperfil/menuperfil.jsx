import "./meuperfil.css"

const menuperfil = ({ abaAtiva, setAbaAtiva }) => {
    return (
        <>
            <div className="menu">
                <button
                className={abaAtiva === "historico" ? "ativo" : ""}
                onClick={() => setAbaAtiva("historico")}
            >
                Histórico
            </button>

            <button
                className={abaAtiva === "perfil" ? "ativo" : ""}
                onClick={() => setAbaAtiva("perfil")}
            >
                Perfil
            </button>

            </div>
        </>
    )
}

export default menuperfil