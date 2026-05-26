import { Navigate } from "react-router-dom";

const ProtectedAdminRoute = ({ children }) => {

    const userStorage =
        localStorage.getItem("clientAuth");

    if (!userStorage) {

        return <Navigate to="/login" />;
    }

    const usuario =
        JSON.parse(userStorage);


    if (usuario.tipoUsers !== "ADMIN") {

        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedAdminRoute;