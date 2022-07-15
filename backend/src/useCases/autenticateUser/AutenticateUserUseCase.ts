require('dotenv').config();
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
        }, `${process.env.JWT_SECRET}`,
        {
            algorithm: "HS512",
            subject: userAlreadyExists.id.toString(),
            expiresIn: "1000s"
        })

        return {token};
    };

}

export { AutenticateUerUseCase };
