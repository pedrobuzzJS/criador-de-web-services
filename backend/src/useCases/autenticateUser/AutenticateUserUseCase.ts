import { Users } from '@prisma/client';
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { client } from "../../infra/prisma/client";

interface IUserAutenticateRequest {
    // name?:string;
    username?:string;
    // email?:string;
    password:string;
}
class AutenticateUerUseCase {

    async execute({ username, password }: IUserAutenticateRequest) {

        const userAlreadyExists = await client.users.findFirst({
            where: {
                username
            }
        })

        if (!userAlreadyExists) {
            throw new Error("Usuario ou senha invalido");
        }

        const passwordMatch = compare(password, userAlreadyExists.password);

        if (!passwordMatch) {
            throw new Error("Usuario ou senha invalido");
        }

        const token = sign({}, '1f1ee6a7-6b0d-4377-80fa-35c517c21cf4', {
            subject: userAlreadyExists.id,
            expiresIn: "20s"
        });

        return { token };
    };

}

export { AutenticateUerUseCase };