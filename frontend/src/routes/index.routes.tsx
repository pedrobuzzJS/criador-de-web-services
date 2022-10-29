import AuthRoutes from "./auth.routes";
import DefaulfRoutes from "./default.routes";
import { useAuth } from "../context/authContex";
import { LoginLoaging } from "../pages/LoginLoagin/LoginLoaging";
import { MenuProvider } from "../context/menuContext";

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