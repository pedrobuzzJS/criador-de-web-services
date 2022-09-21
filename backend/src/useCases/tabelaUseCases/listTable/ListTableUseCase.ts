import { client } from "../../../infra/prisma/client";

export class ListTableUseCase {

    async getAll() {
        const data = await client.tabelas.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem de Menus do Sistema");
        };
        return data;
    };

    async getById(id?: number) {
        const data = await client.tabelas.findMany({
            where: {
                id: id
            }
        });
        if (!data) {
            throw new Error("Sem de Menus do Sistema");
        };
        return data;
    };
};