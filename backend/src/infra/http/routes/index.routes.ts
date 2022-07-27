import { Router } from "express";
import AuthencitateUserController from "../../../useCases/autenticateUser/AutenticateUserController";
import CreateUserController from "../../../useCases/createUser/CreateUserController";
import ListTableController from "../../../useCases/tableCase/ListTableController";

const Routes = Router();

Routes.post("/users", CreateUserController.handle);
Routes.post("/login", AuthencitateUserController.handle);
Routes.get("/table", ListTableController.handle);

export default Routes;