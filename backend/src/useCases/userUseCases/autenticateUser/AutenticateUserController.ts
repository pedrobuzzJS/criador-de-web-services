import { Request, Response } from 'express';
import { AutenticateUerUseCase } from './AutenticateUserUseCase';
class AuthencitateUserController {
    static async handle(request: Request, response: Response) {
        const { data } = request.body;
        const loginData = JSON.parse(data)
        const { username, password } = await loginData;
        const authenticateUserUserCase = new AutenticateUerUseCase();
        const token = await authenticateUserUserCase.getAll({
            username, 
            password
        });
        const user = await authenticateUserUserCase.getUserByUsername(username);

        return response.status(200).json(
            {
                "user": {...user[0]},
                "token" : token
            }
        );
    };
};

export default AuthencitateUserController;
