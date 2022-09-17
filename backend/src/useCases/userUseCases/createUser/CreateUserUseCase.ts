import { hash } from "bcrypt";
import { client } from "../../../infra/prisma/client";

interface IUserRequest {
    name: string;
    username: string;
    email: string;
    password: string;
}
export class CreateUserUseCase {

    async getAll({ name, username, email, password }: IUserRequest ) {
        const userAlreadyExists = await client.users.findFirst({
            where: {
                username
            },
            select: {

            }
        });

        if (userAlreadyExists) {
            throw new Error("Usuario existente");
        }

        const passwordHash = await hash(password, 8);

        const user = await client.users.create({
            data: {
                name,
                username,
                email,
                password: passwordHash
            }
        })
        
        return user;
    }

}