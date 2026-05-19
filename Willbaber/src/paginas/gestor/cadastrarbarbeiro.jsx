import { useState } from "react";
import axios from "axios";

function cadastrarbarbeiro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cpf, setCpf] = useState("");
    const [numero, setNumero] = useState("");

    const [imagem, setImagem] = useState(null);

    async function cadastrarUsuario(e) {

        e.preventDefault();

        try {

            const dadosUsuario = {
                nome,
                email,
                senha,
                cpf,
                numero,
                tipo: "BARBEIRO",
                horarios: []
            };

            const formData = new FormData();

            formData.append(
                "users",
                new Blob(
                    [JSON.stringify(dadosUsuario)],
                    {
                        type: "application/json"
                    }
                )
            );

            if (imagem) {
                formData.append("imagem", imagem);
            }

            const response = await axios.post(
                "http://localhost:8080/willbarber/criarUsuario2",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            console.log(response.data);

            alert("Barbeiro cadastrado com sucesso!");

        } catch (error) {

            console.log(error);

            alert("Erro ao cadastrar");
        }
    }

    return (

        <form onSubmit={cadastrarUsuario}>

            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />

            <input
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
            />

            <input
                type="text"
                placeholder="Número"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
            />

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImagem(e.target.files[0])}
            />

            <button type="submit">
                Cadastrar
            </button>

        </form>
    );
}

export default cadastrarbarbeiro;