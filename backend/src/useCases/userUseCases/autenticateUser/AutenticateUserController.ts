import { Request, Response } from 'express';
import { AutenticateUerUseCase } from './AutenticateUserUseCase';
class AuthencitateUserController {

    static async handle(request: Request, response: Response) {
        const { username, password } = request.body;
        const authenticateUserUserCase = new AutenticateUerUseCase();
        const token = await authenticateUserUserCase.getAll({
            username, 
            password
        });
        return response.json(token);
    };
};

export default AuthencitateUserController;
