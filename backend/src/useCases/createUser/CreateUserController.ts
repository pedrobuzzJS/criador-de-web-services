import { Request, response, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {

    static async handle(request: Request, reponse: Response) {
        const { name, username, email, password } = request.body;

        const createUserController = new CreateUserUseCase();

        const user = await createUserController.execute({
            name,
            username,
            email,
            password
        })

        return response.json(user);
    };

}

export default CreateUserController;
