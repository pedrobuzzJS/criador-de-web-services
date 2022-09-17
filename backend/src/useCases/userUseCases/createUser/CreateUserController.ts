import { Request, response, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {

    static async handle(request: Request, reponse: Response) {
        const { name, username, email, password } = request.body;

        const createUserUseCase = new CreateUserUseCase();

        const user = await createUserUseCase.getAll({
            name,
            username,
            email,
            password
        })

        return response.json(user);
    };

}

export default CreateUserController;
