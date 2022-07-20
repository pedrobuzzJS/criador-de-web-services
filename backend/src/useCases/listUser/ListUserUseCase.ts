import { client } from "../../infra/prisma/client";

export class ListUserUseCase {

    async execute() {
        const users = await client.users.findMany({
          orderBy: {
            id: 'desc'
          }  
        });

        if (!users) {
            throw new Error("Sem retorno do banco");
        }
    }

}