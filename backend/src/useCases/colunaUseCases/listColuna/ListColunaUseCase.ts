import { client } from "../../../infra/prisma/client";

export class ListColunaUseCase {
    async getAll() {
        const data = await client.colunas.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem de Colunas do Sistema");
        };
        return data;
    };

    async getById(id?: number) {
        const data = await client.colunas.findMany({
            where: {
                id: id
            }
        });
        if (!data) {
            throw new Error("Sem de Colunas do Sistema");
        };
        return data;
    };
};