import { client } from "../../../infra/prisma/client";

export class ListCoresUseCase {
    async getAll() {
        const data = await client.cores.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem de Cores do Sistema");
        };
        return data;
    };

    async getById(id?: number) {
        const data = await client.cores.findMany({
            where: {
                id: id
            },
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem de Cores do Sistema");
        };
        return data;
    };
};