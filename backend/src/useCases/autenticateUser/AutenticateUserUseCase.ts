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
            },
            select: {
                id: true,
                username: true,
                password: true
            }
        })

        if (!userAlreadyExists) {
            throw new Error("Usuario ou senha invalido");
        }

        const passwordMatch = await compare(password, userAlreadyExists.password);

        if (!passwordMatch) {
            throw new Error("Usuario ou senha invalido");
        }

        const token = await sign({
            id: userAlreadyExists.id,
            username: userAlreadyExists.username,
        }, '1f1ee6a7-6b0d-4377-80fa-35c517c21cf4',
        {
            algorithm: "HS256",
            subject: userAlreadyExists.id.toString(),
            expiresIn: "60s"
        })


        return {token};
    };

}

export { AutenticateUerUseCase };