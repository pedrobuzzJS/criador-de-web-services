import { Router } from "express";

import ExecuteOperation from "../../../controller/ExecuteOperation";

import AuthencitateUserController from "../../../useCases/userUseCases/autenticateUser/AutenticateUserController";
import CreateUserController from "../../../useCases/userUseCases/createUser/CreateUserController";
import ListUserController from "../../../useCases/userUseCases/listUser/ListUserController";
import tokenAuthenticate from "../../../middleware/jsonWebTokenAuthorization";

import ListMenuController from "../../../useCases/menuUseCases/listMenu/ListMenuController";
import CreateMenuController from "../../../useCases/menuUseCases/createMenuUseCase/CreateMenuController";
import DeleteMenuController from "../../../useCases/menuUseCases/deleteMenuUseCase/DeleteMenuController";
import UpdateMenuController from "../../../useCases/menuUseCases/updateMenuUseCase/UpdateMenuController";

import ListTableController from "../../../useCases/tabelaUseCases/listTable/ListTableController";
import DeleteTableController from "../../../useCases/tabelaUseCases/deleteTable/DeleteTableController";
import CreateTableController from "../../../useCases/tabelaUseCases/createTable/CreateTableController";
import UpdateTableController from "../../../useCases/tabelaUseCases/updateTable/UpdateTableController";

import ListStatusController from "../../../useCases/statusUseCases/listStatus/ListTableController";
import UpdateStatusController from "../../../useCases/statusUseCases/updateStatus/UpdateStatusController";
import DeleteStatusController from "../../../useCases/statusUseCases/deleteStatus/DeleteStatusController";
import CreateStatusController from "../../../useCases/statusUseCases/createStatus/CreateStatusController";

import ListTipoWebServiceController from "../../../useCases/tipoWebServiceUseCases/listTipoWebService/ListTipoWebServiceController";
import DeleteTipoWebServiceController from "../../../useCases/tipoWebServiceUseCases/deleteTipoWebService/DeleteTipoWebServiceController";
import UpdateTipoWebServiceController from "../../../useCases/tipoWebServiceUseCases/updateTipoWebService/UpdateTipoWebServiceController";
import CreateTipoWebServiceController from "../../../useCases/tipoWebServiceUseCases/createTipoWebService/CreateTipoWebServiceController";

import ListTipoBasesController from "../../../useCases/tipoBaseUseCases/listBases/ListTipoBasesController";

import ListBasesController from "../../../useCases/baseUseCase/listBase/ListBaseController";

import ListColunaController from "../../../useCases/colunaUseCases/listColuna/ListColunaController";

import ListRotasController from "../../../useCases/rotasUseCases/listRotas/ListRotasController";

import ListCoresController from "../../../useCases/coresUseCases/listCores/ListCoresController";

import ListAcoesController from "../../../useCases/acoesUseCases/listAcoes/ListAcoesController";

import ListWebServicesController from "../../../useCases/webServiceUseCases/listWebServices/ListWebServicesController";
import CreateWebServicesController from "../../../useCases/webServiceUseCases/createWebServices/CreateWebServicesController";
import UpdateWebServicesController from "../../../useCases/webServiceUseCases/updateWebServices/UpdatesWebServicesController";
import DeleteWebServicesController from "../../../useCases/webServiceUseCases/deleteWebServices/DeleteWebServicesController";

import ListWebServicesObjController from "../../../useCases/webServicesOjbUseCases/ListWebServices/ListWebServicesObjController";
import UpdateWebServicesObjController from "../../../useCases/webServicesOjbUseCases/UpdateWebServicesObjController/UpdateWebServicesObjController";
import CreateWebServicesObjController from "../../../useCases/webServicesOjbUseCases/CreateWebServicesObjController/CreateWebServicesObjController";
import DeleteWebServicesObjController from "../../../useCases/webServicesOjbUseCases/DeleteWebServicesObjController/DeleteWebServicesObjController";

import ListWebServiceRoutesController from "../../../useCases/webServiceRoutesUseCase/ListWebServiceRoutes/ListWebServiceRoutesController";
import CreateWebServiceRoutesController from "../../../useCases/webServiceRoutesUseCase/CreateWebServiceRoutes/CreateWebServiceRoutesController";
import UpdateWebServiceRoutesController from "../../../useCases/webServiceRoutesUseCase/UpdateWebServiceRoutes/UpdateWebServiceRoutesController";
import DeleteWebServiceRoutesController from "../../../useCases/webServiceRoutesUseCase/DeleteWebServiceRoutes/DeleteWebServiceRoutesController";

import ExecuteWebServiceController from "../../../modules/ExecuteWebServiceController";

import ObjToSqlController from "../../../modules/ObjToSqlController";

import { client } from "../../prisma/client";

const Routes = Router();

Routes.post("/users", CreateUserController.handle);
Routes.post("/login", AuthencitateUserController.handle);
Routes.get("/usuario", tokenAuthenticate, ListUserController.handle);

Routes.get("/table", tokenAuthenticate, ListTableController.handle);
Routes.post("/table", tokenAuthenticate, CreateTableController.handle);
Routes.put("/table", tokenAuthenticate, UpdateTableController.handle);
Routes.delete("/table", tokenAuthenticate, DeleteTableController.handle);

Routes.get("/menu", tokenAuthenticate, ListMenuController.handle);
Routes.post("/menu", tokenAuthenticate, CreateMenuController.handle);
Routes.put("/menu", tokenAuthenticate, UpdateMenuController.handle);
Routes.delete("/menu", tokenAuthenticate, DeleteMenuController.handle);

Routes.get("/status", tokenAuthenticate, ListStatusController.handle);
Routes.post("/status", tokenAuthenticate, CreateStatusController.handle);
Routes.put("/status", tokenAuthenticate, UpdateStatusController.handle);
Routes.delete("/status", tokenAuthenticate, DeleteStatusController.handle);

Routes.get("/tipowebservice", tokenAuthenticate, ListTipoWebServiceController.handle);
Routes.post("/tipowebservice", tokenAuthenticate, CreateTipoWebServiceController.handle);
Routes.put("/tipowebservice", tokenAuthenticate, UpdateTipoWebServiceController.handle);
Routes.delete("/tipowebservice", tokenAuthenticate, DeleteTipoWebServiceController.handle);

Routes.get("/tipo-base", tokenAuthenticate, ListTipoBasesController.handle);

Routes.get("/base", tokenAuthenticate, ListBasesController.handle);

Routes.get("/colunas", tokenAuthenticate, ListColunaController.handle);

Routes.get("/rotas", tokenAuthenticate, ListRotasController.handle);

Routes.get("/cores", tokenAuthenticate, ListCoresController.handle)

Routes.get("/acoes", tokenAuthenticate, ListAcoesController.handle);

Routes.get("/webservices", tokenAuthenticate, ListWebServicesController.handle);
Routes.post("/webservices", tokenAuthenticate, CreateWebServicesController.handle);
Routes.put("/webservices", tokenAuthenticate, UpdateWebServicesController.handle);
Routes.delete("/webservices", tokenAuthenticate, DeleteWebServicesController.handle);

Routes.get("/webservicesobj", tokenAuthenticate, ListWebServicesObjController.handle);
Routes.post("/webservicesobj", tokenAuthenticate, CreateWebServicesObjController.handle);
Routes.put("/webservicesobj", tokenAuthenticate, UpdateWebServicesObjController.handle);
Routes.delete("/webservicesobj", tokenAuthenticate, DeleteWebServicesObjController.handle);

Routes.get("/webserviceroutes", tokenAuthenticate, ListWebServiceRoutesController.handle);
Routes.post("/webserviceroutes", tokenAuthenticate, CreateWebServiceRoutesController.handle);
Routes.put("/webserviceroutes", tokenAuthenticate, UpdateWebServiceRoutesController.handle);
Routes.delete("/webserviceroutes", tokenAuthenticate, DeleteWebServiceRoutesController.handle);

Routes.get("/executeoperation", tokenAuthenticate, ExecuteOperation.handle);

Routes.get("/executewebservice", ExecuteWebServiceController.handle);

Routes.get("/objtosql", ObjToSqlController.handle);

// async function automaticRoute() {
//     const teste = await client.webServiceRoutes.findMany();
//     // console.log(teste);
//     teste.forEach(rota => {
//         Routes.get("/"+rota.route, ListWebServicesObjController.handle);
//     });
// };

// automaticRoute();

export default Routes;