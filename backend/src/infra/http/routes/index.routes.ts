import { Router } from "express";
import AuthencitateUserController from "../../../useCases/autenticateUser/AutenticateUserController";
import CreateUserController from "../../../useCases/createUser/CreateUserController";
import ListMenuController from "../../../useCases/listMenu/ListMenuController";
import ListTableController from "../../../useCases/listTable/ListTableController";

const Routes = Router();

Routes.post("/users", CreateUserController.handle);
Routes.post("/login", AuthencitateUserController.handle);
Routes.get("/table", ListTableController.handle);
Routes.get("/menu", ListMenuController.handle);

export default Routes;