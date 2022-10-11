import { client } from "../../../infra/prisma/client";

export class ListTableUseCase {

    async getAll() {
        const data = await client.tabelas.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem de Tabelas do Sistema");
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
            throw new Error("Sem de Tabelas do Sistema");
        };
        return data;
    };

    async getTable() {
        const data = await client.$queryRaw`
            SELECT table_name, table_schema
                FROM information_schema.tables
            WHERE table_schema='public'
                AND table_type='BASE TABLE';
        `;
        if (!data) {
            throw new Error("Sem de tabelas do Sistema");
        };
        return data;
    };
};