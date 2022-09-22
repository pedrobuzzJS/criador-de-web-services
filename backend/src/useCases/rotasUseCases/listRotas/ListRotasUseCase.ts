import { client } from "../../../infra/prisma/client";

export class ListRotasUseCase {
    async getAll() {
        const data = await client.rotas.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem de Rotas do Sistema");
        };
        return data;
    };

    async getById(id?: number) {
        const data = await client.rotas.findMany({
            where: {
                id: id
            }
        });
        if (!data) {
            throw new Error("Sem de Rotas do Sistema");
        };
        return data;
    };
};