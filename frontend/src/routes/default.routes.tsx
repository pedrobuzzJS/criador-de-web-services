import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";

const DefaulfRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path={"*"} element={<Login />}/>
            </Routes>
        </BrowserRouter>
    );
};

export default DefaulfRoutes;