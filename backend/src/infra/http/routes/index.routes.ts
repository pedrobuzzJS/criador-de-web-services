import { Router } from "express";
import AuthencitateUserController from "../../../useCases/userUseCases/autenticateUser/AutenticateUserController";
import CreateUserController from "../../../useCases/userUseCases/createUser/CreateUserController";
import ListUserController from "../../../useCases/userUseCases/listUser/ListUserController";
import tokenAuthenticate from "../../../middleware/jsonWebTokenAuthorization";

import ListMenuController from "../../../useCases/menuUseCases/listMenu/ListMenuController";
import CreateMenuController from "../../../useCases/menuUseCases/createMenuUseCase/CreateMenuController";
import DeleteMenuController from "../../../useCases/menuUseCases/deleteMenuUseCase/DeleteMenuController";
import UpdateMenuController from "../../../useCases/menuUseCases/updateMenuUseCase/UpdateMenuController";

import ListTableController from "../../../useCases/tableUseCases/listTable/ListTableController";
import DeleteTableController from "../../../useCases/tableUseCases/deleteTable/DeleteTableController";
import CreateTableController from "../../../useCases/tableUseCases/createTable/CreateTableController";
import UpdateTableController from "../../../useCases/tableUseCases/updateTable/UpdateTableController";

import ListStatusController from "../../../useCases/statusUseCases/listStatus/ListTableController";
import UpdateStatusController from "../../../useCases/statusUseCases/updateStatus/UpdateStatusController";
import DeleteStatusController from "../../../useCases/statusUseCases/deleteStatus/DeleteStatusController";
import CreateStatusController from "../../../useCases/statusUseCases/createStatus/CreateStatusController";

import ListTipoWebServiceController from "../../../useCases/tipoWebServiceUseCases/listTipoWebService/ListTipoWebServiceController";
import DeleteTipoWebServiceController from "../../../useCases/tipoWebServiceUseCases/deleteTipoWebService/DeleteTipoWebServiceController";
import UpdateTipoWebServiceController from "../../../useCases/tipoWebServiceUseCases/updateTipoWebService/UpdateTipoWebServiceController";
import CreateTipoWebServiceController from "../../../useCases/tipoWebServiceUseCases/createTipoWebService/CreateTipoWebServiceController";

const Routes = Router();

Routes.post("/users", CreateUserController.handle);
Routes.post("/login", AuthencitateUserController.handle);
Routes.get("/usuario", ListUserController.handle);

Routes.get("/table", ListTableController.handle);
Routes.post("/table", CreateTableController.handle);
Routes.put("/table", UpdateTableController.handle);
Routes.delete("/table", DeleteTableController.handle);

Routes.get("/menu", ListMenuController.handle);
Routes.post("/menu", CreateMenuController.handle);
Routes.put("/menu", UpdateMenuController.handle);
Routes.delete("/menu", DeleteMenuController.handle);

Routes.get("/status", ListStatusController.handle);
Routes.post("/status", CreateStatusController.handle);
Routes.put("/status", UpdateStatusController.handle);
Routes.delete("/status", DeleteStatusController.handle);

Routes.get("/tipowebservice", ListTipoWebServiceController.handle);
Routes.post("/tipowebservice", CreateTipoWebServiceController.handle);
Routes.put("/tipowebservice", UpdateTipoWebServiceController.handle);
Routes.delete("/tipowebservice", DeleteTipoWebServiceController.handle);


export default Routes;