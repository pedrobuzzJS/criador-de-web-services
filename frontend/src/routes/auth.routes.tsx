import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBar } from "../components/SideBar/SideBar";
import { AcoesMaintenance } from "../pages/Acoes/AcoesMaintenance/AcoesMaintenance";
import { AcoesQuery } from "../pages/Acoes/AcoesQuery/AcoesQuery";
import { BasesMaintenance } from "../pages/Bases/BasesMaintenance/BasesMaintenance";
import { BasesQuery } from "../pages/Bases/BasesQuery/BasesQuery";
import { ColunasMaintenance } from "../pages/Colunas/ColunaMaintenance/ColunasMaintenance";
import { CoresMaintenance } from "../pages/Cores/CoresMaintenance/CoresMaintenance";
import { CoresQuery } from "../pages/Cores/CoresQuery/CoresQuery";
import { MenuMaintenance } from "../pages/Menu/MenuMaintenance/MenuMaintenance";
import { MenuQuery } from "../pages/Menu/MenuQuery/MenuQuery";
import { PageNotFound } from "../pages/PageNotFound/pageNotFound";
import { RotasMaintenance } from "../pages/Rotas/RotasMaintenance/RotasMaintenance";
import { RotasQuery } from "../pages/Rotas/RotasQuery/RotasQuery";
import { StatusMaintenance } from "../pages/Status/StatusMaintenance/StatusMaintenance";
import { StatusQuery } from "../pages/Status/StatusQuery/StatusQuery";
import { TabelasMaintenance } from "../pages/Tabelas/TabelasMaintenance/TabelasMaintenance";
import { TabelasQuery } from "../pages/Tabelas/TabelasQuery/TabelasQuery";
import { TipoBaseMaintenance } from "../pages/TipoBase/TipoBaseMaintenance/TipoBaseMaintenance";
import { TipoBaseQuery } from "../pages/TipoBase/TipoBaseQuery/TipoBaseQuery";
import { TipoWebServiceMaintenance } from "../pages/TipoWebService/TipoWebServiceMaintenance/TipoWebServiceMaintenance";
import { TipoWebServiceQuery } from "../pages/TipoWebService/TipoWebServiceQuery/TipoWebServiceQuery";
import { UsersMaintenance } from "../pages/Users/UsersMaintenance/UsersMaintenance";
import { UserQuery } from "../pages/Users/UsersQuery/UsersQuery";
import { WebServicesMaintenance } from "../pages/WebServices/WebServicesMaintenance/WebServicesMaintenance";
import { WebServicesQuery } from "../pages/WebServices/WebServicesQuery/WebServicesQuery";
import { WebServicesObjMaintanance } from "../pages/WebServicesObj/WebServicesObjMaintanance/WebServicesObjMaintanance";
import { WebServicesObjQuery } from "../pages/WebServicesObj/WebServicesObjQuery/WebServicesObjQuery";
import { MenuProvider } from "../context/menuContext";
import { WebServiceRoutesQuery } from "../pages/WebServiceRoutes/WebServiceRoutesQuery/WebServiceRoutesQuery";
import { WebServiceRoutesMaintenance } from "../pages/WebServiceRoutes/WebServiceRoutesMaintenance/WebServiceRoutesMaintenance";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { WebServiceProvider } from "../context/webServiceMountContext";
import { FormProvider } from "../context/formContext";

const AuthRoutes = () => {
    return (
        <BrowserRouter>
            <MenuProvider children={
                <>
                    <SideBar />
                    <FormProvider children={
                        <>
                            <WebServiceProvider children={
                                <>
                                    <Routes>
                                        <Route path="/" element={<Dashboard />} />
                                        <Route path="usuario-consulta" element={<UserQuery />} />
                                        <Route path="usuario-manutencao/:op/:id" element={<UsersMaintenance />} />
                                        <Route path="menu-consulta" element={<MenuQuery />} />
                                        <Route path="menu-manutencao/:op/:id" element={<MenuMaintenance />} />
                                        <Route path="menu-manutencao/:op" element={<MenuMaintenance />} />
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
                                        <Route path="rotas-manutencao/:op" element={<RotasMaintenance />} />
                                        <Route path="cores-consulta" element={<CoresQuery />} />
                                        <Route path="cores-manutencao/:op/:id" element={<CoresMaintenance />} />
                                        <Route path="acoes-consulta" element={<AcoesQuery />} />
                                        <Route path="acoes-manutencao/:op/:id" element={<AcoesMaintenance />} />
                                        <Route path="webservices-consulta" element={<WebServicesQuery />} />
                                        <Route path="webservices-manutencao/:op/:id" element={<WebServicesMaintenance />} />
                                        <Route path="webservices-manutencao/:op" element={<WebServicesMaintenance />} />
                                        <Route path="webservicesobj-consulta" element={<WebServicesObjQuery />} />
                                        <Route path="webservicesobj-manutencao/:op/:id" element={<WebServicesObjMaintanance />} />
                                        <Route path="webservicesobj-manutencao/:op" element={<WebServicesObjMaintanance />} />
                                        <Route path="webserviceroutes-consulta" element={<WebServiceRoutesQuery />} />
                                        <Route path="webserviceroutes-manutencao/:op/:id" element={<WebServiceRoutesMaintenance />} />
                                        <Route path="webserviceroutes-manutencao/:op" element={<WebServiceRoutesMaintenance />} />
                                        <Route path={"*"} element={<PageNotFound />}/>
                                    </Routes>
                                </>
                            }/>
                        </>
                    }/>
                </>
            } />
        </BrowserRouter>
    );
};

export default AuthRoutes;