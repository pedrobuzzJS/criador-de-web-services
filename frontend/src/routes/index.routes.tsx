import { useContext } from "react";
import AuthContext from "../context/auth";

const Routes = () => {
    const {signed} = useContext(AuthContext);

    return signed;
};

export default Routes;