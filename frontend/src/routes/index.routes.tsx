import React, { useContext } from "react";
import AuthContext from "../context/auth";

const Routes: React.FC = () => {
    const {signed} = useContext(AuthContext);

    return signed;
}

export default Routes;