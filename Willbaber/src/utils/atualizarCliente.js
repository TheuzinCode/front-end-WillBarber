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

        /*
         * atualiza state
         */

        setCliente(data);

        /*
         * atualiza localStorage
         */

        localStorage.setItem(
            "clientAuth",
            JSON.stringify(data)
        );

    } catch (error) {

        console.log(error);
    }
}