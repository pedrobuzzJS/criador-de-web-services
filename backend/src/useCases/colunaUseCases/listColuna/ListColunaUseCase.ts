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
                tabela_id: id
            },
            orderBy: {
                posicao: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem de Colunas do Sistema");
        };
        return data;
    };

    async getTableIdByTableName(table: string) {
        const result = await client.tabelas.findMany({
            select: {
                id: true,
            },
            where: {
                nome: table
            }
        });
        return result[0]?.id;
    };

    async getColunaByTableName(table: string) {
        const columns = await client.$queryRaw`
            SELECT
                column_name,
                data_type,
                ordinal_position,
                is_nullable,
                column_default,
                character_maximum_length,
                numeric_precision_radix,
                is_identity,
                is_self_referencing,
                is_updatable
            FROM
                information_schema.columns
            WHERE table_name = ${table}
            order by ordinal_position
        `;
        if (!columns) {
            throw new Error("Sem de Colunas do Sistema");
        };
        const id = await this.getTableIdByTableName(table);
        return {table_id: id, table_name: table, columns};
    };
};