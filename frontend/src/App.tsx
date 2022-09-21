import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBar } from "./components/SideBar/SideBar";
import { Login } from "./pages/Login/login";
import { PageA } from "./pages/PageA/pageA";
import { PageB } from "./pages/PageB/pageB";
import { PageNotFound } from "./pages/PageNotFound/pageNotFound";
import { MenuQuery } from "./pages/Menu/MenuQuery/MenuQuery";
import { MenuMaintenance } from "./pages/Menu/MenuMaintenance/MenuMaintenance";
import { StatusQuery } from "./pages/Status/StatusQuery/StatusQuery";
import { TabelasQuery } from "./pages/Tabelas/TabelasQuery/TabelasQuery";
import { TabelasMaintenance } from "./pages/Tabelas/TabelasMaintenance/TabelasMaintenance";
import { StatusMaintenance } from "./pages/Status/StatusMaintenance/StatusMaintenance";
import { TipoWebServiceQuery } from "./pages/TipoWebService/TipoWebServiceQuery/TipoWebServiceQuery";
import { UserQuery } from "./pages/Users/UsersQuery/UsersQuery";
import { TipoWebServiceMaintenance } from "./pages/TipoWebService/TipoWebServiceMaintenance/TipoWebServiceMaintenance";
import { UsersMaintenance } from "./pages/Users/UsersMaintenance/UsersMaintenance";
import { ColunasQuery } from "./pages/Colunas/ColunasQuery/ColunasQuery";
import { ColunasMaintenance } from "./pages/Colunas/ColunaMaintenance/ColunasMaintenance";
import { BasesQuery } from "./pages/Bases/BasesQuery/BasesQuery";
import { BasesMaintenance } from "./pages/Bases/BasesMaintenance/BasesMaintenance";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="pagea" element={<PageA />} />
          <Route path="pageb" element={<PageB />} />
          <Route path="login" element={<Login />} />
          <Route path="usuario-consulta" element={<UserQuery />} />
          <Route path="usuario-manutencao/:op/:id" element={<UsersMaintenance />} />
          <Route path="menu-consulta" element={<MenuQuery />} />
          <Route path="menu-manutencao/:op/:id" element={<MenuMaintenance />} />
          <Route path="tabelas-consulta" element={<TabelasQuery />} />
          <Route path="tabelas-manutencao/:op/:id" element={<TabelasMaintenance />} />
          <Route path="status-contulta" element={<StatusQuery />} />
          <Route path="status-manutencao/:op/:id" element={<StatusMaintenance />} />
          <Route path="tipowebservice-contulta" element={<TipoWebServiceQuery />} />
          <Route path="tipowebservice-manutencao/:op/:id" element={<TipoWebServiceMaintenance />} />
          <Route path="colunas-consulta" element={<ColunasQuery />} />
          <Route path="colunas-manutencao/:op/:id" element={<ColunasMaintenance />} />
          <Route path="bases-consulta" element={<BasesQuery />} />
          <Route path="bases-manutencao/:op/:id" element={<BasesMaintenance />} />
          <Route path={"*"} element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;