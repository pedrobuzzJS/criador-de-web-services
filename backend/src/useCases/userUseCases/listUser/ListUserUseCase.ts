import { client } from "../../../infra/prisma/client";

export class ListUserUseCase {
    async getAll() {
        const data = await client.users.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem de Usuario do Sistema");
        };
        return data;
    };
    async getById(id?: number) {
        const data = await client.users.findMany({
            where: {
                id: id
            },
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem de Usuario do Sistema");
        };
        return data;
    };
};