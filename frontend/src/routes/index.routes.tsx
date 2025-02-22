import AuthRoutes from "./auth.routes";
import DefaulfRoutes from "./default.routes";
import { useAuth } from "../context/authContex";
import { LoginLoaging } from "../pages/LoginLoagin/LoginLoaging";

const Routes = () => {
    const { signed, loginLoaging } = useAuth();

    if (loginLoaging === true) {
        return (
            <LoginLoaging />
        );
    };

    return 1 == 1 ? <AuthRoutes /> : <DefaulfRoutes />;
};

export default Routes;