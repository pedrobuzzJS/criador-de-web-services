import { Router } from "express";
import AuthencitateUserController from "../../../useCases/userUseCases/autenticateUser/AutenticateUserController";
import CreateUserController from "../../../useCases/userUseCases/createUser/CreateUserController";
import ListMenuController from "../../../useCases/menuUseCases/listMenu/ListMenuController";
import ListTableController from "../../../useCases/tableUseCases/listTable/ListTableController";
import tokenAuthenticate from "../../../middleware/jsonWebTokenAuthorization";
import ListStatusController from "../../../useCases/statusUseCases/listStatus/ListTableController";
import ListTipoWebServiceController from "../../../useCases/tipoWebServiceUseCases/listTipoWebService/ListTipoWebServiceController";

const Routes = Router();

Routes.post("/users", CreateUserController.handle);
Routes.post("/login", AuthencitateUserController.handle);
Routes.get("/table", ListTableController.handle);
Routes.get("/menu", ListMenuController.handle);
Routes.get("/status", ListStatusController.handle);
Routes.get("/tipowebservice", ListTipoWebServiceController.handle);
// Routes.get("/status/:id", ListStatusController.handle);

export default Routes;