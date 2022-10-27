import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { PageNotFound } from "../pages/PageNotFound/pageNotFound";

const DefaulfRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path={"*"} element={<PageNotFound />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default DefaulfRoutes;