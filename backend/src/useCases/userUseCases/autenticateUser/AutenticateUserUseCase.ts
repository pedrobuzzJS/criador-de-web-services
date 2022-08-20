require('dotenv').config();
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { client } from "../../../infra/prisma/client";

interface IUserAutenticateRequest {
    // name?:string;
    username?:string;
    // email?:string;
    password:string;
}

const colunms = {
    id: true,
    username: true,
    password: true
}

const tabela = "users";

class AutenticateUerUseCase {

    async execute({ username, password }: IUserAutenticateRequest) {

        const userAlreadyExists = await client.users.findFirst({
            where: {
                username
            },
            select: {
                ...colunms  
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
        }, "d13bf4cd-c6f6-4164-8ab7-207fec130d21",
        {
            algorithm: "HS512",
            subject: userAlreadyExists.id.toString(),
            expiresIn: "3600s"
        })

        return token;
    };

}

export { AutenticateUerUseCase };
