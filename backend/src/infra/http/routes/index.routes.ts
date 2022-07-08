import { Router } from "express";
import { AuthencitateUserController } from "../../../useCases/autenticateUser/AutenticateUserController";
import { CreateUserController } from "../../../useCases/createUser/CreateUserController";

const Routes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthencitateUserController();

Routes.post("/users", createUserController.handle);
Routes.post("/login", authenticateUserController.handle);

export default Routes;