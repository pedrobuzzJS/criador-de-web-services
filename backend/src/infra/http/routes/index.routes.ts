import { Router } from "express";
import AuthencitateUserController from "../../../useCases/autenticateUser/AutenticateUserController";
import CreateUserController from "../../../useCases/createUser/CreateUserController";

const Routes = Router();

Routes.post("/users", CreateUserController.handle);
Routes.post("/login", AuthencitateUserController.handle);

export default Routes;