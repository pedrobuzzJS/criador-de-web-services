import AuthRoutes from "./auth.routes";
import DefaulfRoutes from "./default.routes";
import { useAuth } from "../context/authContex";
import { LoginLoaging } from "../pages/LoginLoagin/LoginLoaging";
import { useState } from "react";
import { useContext } from "react";

const Routes = () => {
    const { signed, loginLoaging } = useAuth();

    if (loginLoaging === true) {
        return (
            <LoginLoaging />
        );
    };

    return signed ? <AuthRoutes /> : <DefaulfRoutes />;
};

export default Routes;