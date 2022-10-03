import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBar } from "./components/SideBar/SideBar";
import { Login } from "./pages/Login/login";
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
import { TipoBaseQuery } from "./pages/TipoBase/TipoBaseQuery/TipoBaseQuery";
import { RotasQuery } from "./pages/Rotas/RotasQuery/RotasQuery";
import { RotasMaintenance } from "./pages/Rotas/RotasMaintenance/RotasMaintenance";
import { CoresQuery } from "./pages/Cores/CoresQuery/CoresQuery";
import { CoresMaintenance } from "./pages/Cores/CoresMaintenance/CoresMaintenance";
import { AcoesQuery } from "./pages/Acoes/AcoesQuery/AcoesQuery";
import { AcoesMaintenance } from "./pages/Acoes/AcoesMaintenance/AcoesMaintenance";
import { WebServicesQuery } from "./pages/WebServices/WebServicesQuery/WebServicesQuery";
import { WebServicesMaintenance } from "./pages/WebServices/WebServicesMaintenance/WebServicesMaintenance";
import { TipoBaseMaintenance } from "./pages/TipoBase/TipoBaseMaintenance/TipoBaseMaintenance";
import { WebServicesObjMaintanance } from "./pages/WebServicesObj/WebServicesObjMaintanance/WebServicesObjMaintanance";
import { WebServicesObjQuery } from "./pages/WebServicesObj/WebServicesObjQuery/WebServicesObjQuery";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="usuario-consulta" element={<UserQuery />} />
          <Route path="usuario-manutencao/:op/:id" element={<UsersMaintenance />} />
          <Route path="menu-consulta" element={<MenuQuery />} />
          <Route path="menu-manutencao/:op/:id" element={<MenuMaintenance />} />
          <Route path="tabelas-consulta" element={<TabelasQuery />} />
          <Route path="tabelas-manutencao/:op/:id" element={<TabelasMaintenance />} />
          <Route path="status-contulta" element={<StatusQuery />} />
          <Route path="status-manutencao/:op/:id" element={<StatusMaintenance />} />
          <Route path="status-manutencao/:op" element={<StatusMaintenance />} />
          <Route path="tipowebservice-contulta" element={<TipoWebServiceQuery />} />
          <Route path="tipowebservice-manutencao/:op/:id" element={<TipoWebServiceMaintenance />} />
          <Route path="colunas-manutencao/:op/:id" element={<ColunasMaintenance />} />
          <Route path="bases-consulta" element={<BasesQuery />} />
          <Route path="bases-manutencao/:op/:id" element={<BasesMaintenance />} />
          <Route path="tipo-base-consulta" element={<TipoBaseQuery />} />
          <Route path="tipo-base-manutencao/:op/:id" element={<TipoBaseMaintenance />} />
          <Route path="rotas-consulta" element={<RotasQuery />} />
          <Route path="rotas-manutencao/:op/:id" element={<RotasMaintenance />} />
          <Route path="cores-consulta" element={<CoresQuery />} />
          <Route path="cores-manutencao/:op/:id" element={<CoresMaintenance />} />
          <Route path="acoes-consulta" element={<AcoesQuery />} />
          <Route path="acoes-manutencao/:op/:id" element={<AcoesMaintenance />} />
          <Route path="webservices-consulta" element={<WebServicesQuery />} />
          <Route path="webservices-manutencao/:op/:id" element={<WebServicesMaintenance />} />
          <Route path="webservicesobj-consulta" element={<WebServicesObjQuery />} />
          <Route path="webservicesobj-manutencao/:op/:id" element={<WebServicesObjMaintanance />} />
          <Route path={"*"} element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;