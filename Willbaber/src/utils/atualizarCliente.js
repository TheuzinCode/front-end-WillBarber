export async function atualizarCliente() {

    const userStorage =
        localStorage.getItem("clientAuth");

    if (!userStorage) return;

    const userObj =
        JSON.parse(userStorage);

    try {

        const resp = await fetch(
            `http://localhost:8080/willbarber/perfil/${userObj.id}`
        );

        if (!resp.ok) return;

        const data = await resp.json();

        const body ={
            id: data.id,
            nome: data.nome,
            email: data.email,
            pontos: data.pontos,
            role: data.tipoUsers
        }

        localStorage.setItem(
            "clientAuth",
            JSON.stringify(body)
        );

    } catch (error) {

        console.log(error);
    }
}