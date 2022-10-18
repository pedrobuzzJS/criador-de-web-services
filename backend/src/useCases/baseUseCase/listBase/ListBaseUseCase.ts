import { client } from "../../../infra/prisma/client";

export class ListBasesUseCase {
    async getAll() {
        const data = await client.bases.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem de Base do Sistema");
        };
        return data;
    };

    async getById(id?: number) {
        const data = await client.bases.findMany({
            where: {
                id: id
            }
        });
        if (!data) {
            throw new Error("Sem de Base do Sistema");
        };
        return data;
    };
};