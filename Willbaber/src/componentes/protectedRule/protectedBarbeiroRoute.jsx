import { Navigate } from "react-router-dom";

const protectedBarbeiroRoute = ({ children }) => {

    const userStorage =
        localStorage.getItem("clientAuth");

    if (!userStorage) {

        return <Navigate to="/login" />;
    }

    const usuario =
        JSON.parse(userStorage);


    if (usuario.role !== "BARBEIRO") {

        return <Navigate to="/" />;
    }

    return children;
}

export default protectedBarbeiroRoute;