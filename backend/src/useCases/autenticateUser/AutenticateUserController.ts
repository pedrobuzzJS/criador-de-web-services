import { Request, Response } from 'express';
import { AutenticateUerUseCase } from './AutenticateUserUseCase';

class AuthencitateUserController {

    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const authenticateUserUserCase = new AutenticateUerUseCase();

        const token = authenticateUserUserCase.execute({
            username, 
            password
        })

        return response.json(token);
    }

}

export { AuthencitateUserController };