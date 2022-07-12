import { hash } from "bcrypt";
import { client } from "../../infra/prisma/client";

interface IUserRequest {
    name: string;
    username: string;
    email: string;
    password: string;
}

class CreateUserUseCase {

    async execute({ name, username, email, password }: IUserRequest ) {
        const userAlreadyExists = await client.users.findFirst({
            where: {
                username
            }
        });

        if (userAlreadyExists) {
            throw new Error("Usuario existentesrs");
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

export { CreateUserUseCase }
