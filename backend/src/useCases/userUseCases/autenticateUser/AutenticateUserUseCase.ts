require('dotenv').config();
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { client } from "../../../infra/prisma/client";
import { verify } from "jsonwebtoken";

interface IUserAutenticateRequest {
    name?:string;
    username?:string;
    email?:string;
    password:string;
}

const colunms = {
    id: true,
    username: true,
    password: true
}
class AutenticateUerUseCase {
    async getAll({ username, password }: IUserAutenticateRequest) {
        const userAlreadyExists = await client.users.findFirst({
            where: {
                username
            },
            select: {
                ...colunms  
            }
        });
        if (!userAlreadyExists) {
            return {"msg": "Usuario ou senha invalido"};
        };
        const passwordMatch = await compare(password, userAlreadyExists.password);
        if (!passwordMatch) {
            return {"msg": "Usuario ou senha invalido"};
        };
        const token = await sign({
            id: userAlreadyExists.id,
            username: userAlreadyExists.username,
        }, "d13bf4cd-c6f6-4164-8ab7-207fec130d21",
        {
            algorithm: "HS512",
            subject: userAlreadyExists.id.toString(),
            expiresIn: "36d"
        });

        if (token) {
            return token;
        };

        return false;
    };

    async getUserByUsername(username: string, token?: any) {
        try {
            verify(String(token), "d13bf4cd-c6f6-4164-8ab7-207fec130d21");
            const data = await client.users.findMany({
            where: {
                username: username
            },
            select: {
                id: true,
                name: true,
                username: true,
                email: true,
                status_id: true
            }
            });
            if (!data) {
                throw new Error("Sem de Usuario do Sistema");
            };
            return data;
        } catch(err) {
            return [err];
        };

    };
};

export { AutenticateUerUseCase };
