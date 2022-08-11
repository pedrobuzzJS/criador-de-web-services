import { Router } from "express";
import AuthencitateUserController from "../../../useCases/userUseCases/autenticateUser/AutenticateUserController";
import CreateUserController from "../../../useCases/userUseCases/createUser/CreateUserController";
import ListMenuController from "../../../useCases/menuUseCases/listMenu/ListMenuController";
import ListTableController from "../../../useCases/tableUseCases/listTable/ListTableController";
import tokenAuthenticate from "../../../middleware/jsonWebTokenAuthorization";

const Routes = Router();

Routes.post("/users", CreateUserController.handle);
Routes.post("/login", AuthencitateUserController.handle);
Routes.get("/table", ListTableController.handle);
Routes.get("/menu", ListMenuController.handle);

export default Routes;