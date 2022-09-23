import { client } from "../../../infra/prisma/client";

export class ListAcoesUseCase {
    async getAll() {
        const data = await client.acoes.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem de Acoes do Sistema");
        };
        return data;
    };

    async getById(id?: number) {
        const data = await client.acoes.findMany({
            where: {
                id: id
            }
        });
        if (!data) {
            throw new Error("Sem de Acoes do Sistema");
        };
        return data;
    };
};