import { useContext } from "react";
import AuthContext from "../context/auth";

const AuthRoutes = () => {
    const {signed} = useContext(AuthContext);

    return signed;
};

export default AuthRoutes;