import "./meuperfil.css"

const menuperfil = () => {
    return (
        <>
            <div className="menu">
                <button className="ativo">
                    <i className="fa-solid fa-clock-rotate-left"></i>
                    Histórico
                </button>
                
                <button>
                    <i className="fa-regular fa-user"></i>
                    Perfil
                </button>
            </div>
        </>
    )
}

export default menuperfil