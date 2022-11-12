import { Request, Response } from 'express';
import { AutenticateUerUseCase } from './AutenticateUserUseCase';
class AuthencitateUserController {
    static async handle(request: Request, response: Response) {
        const { data } = request.body;
        const loginData = JSON.parse(data)
        const { username, password } = loginData;
        const authenticateUserUserCase = new AutenticateUerUseCase();
        const token = await authenticateUserUserCase.getAll({
            username, 
            password
        });
        if (token) {
            const user = await authenticateUserUserCase.getUserByUsername(username, token);
            return response.status(200).json(
                {
                    "user": user[0],
                    "token" : token
                }
            );
        };
        return response.status(404).json(
            {
                "msg": "User not found"
            }
        );
    };
};

export default AuthencitateUserController;
