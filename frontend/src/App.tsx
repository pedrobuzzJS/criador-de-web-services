import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormBuilder } from "./components/Form/FormBuilder/FormBuilder";
import { SideBar } from "./components/SideBar/SideBar";
import { Login } from "./pages/Login/login";
import { PageA } from "./pages/PageA/pageA";
import { PageB } from "./pages/PageB/pageB";
import { PageNotFound } from "./pages/PageNotFound/pageNotFound";
import { MenuQuery } from "./pages/Menu/MenuQuery/MenuQuery";
import { StatusQuery } from "./pages/Status/StatusQuery/StatusQuery";
import { TabelasQuery } from "./pages/Tabelas/TabelasQuery/TabelasQuery";
import { StatusMaintenance } from "./pages/Status/StatusMaintenance/StatusMaintenance";
import { TipoWebServiceQuery } from "./pages/TipoWebService/TipoWebServiceQuery/TipoWebServiceQuery";
import { UserQuery } from "./pages/Users/UsersQuery/UsersQuery";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="pagea" element={<PageA />} />
          <Route path="pageb" element={<PageB />} />
          <Route path="login" element={<Login />} />
          <Route path="formc" element={<FormBuilder ss={''} />} />
          <Route path="usuario" element={<UserQuery />} />
          <Route path="menuconsulta" element={<MenuQuery />} />
          <Route path="tabelasconsulta" element={<TabelasQuery />} />
          <Route path="statuscontulta" element={<StatusQuery />} />
          <Route path="tipowebservicecontulta" element={<TipoWebServiceQuery />} />
          <Route path="status/:op/:id" element={<StatusMaintenance />} />
          <Route path={"*"} element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;