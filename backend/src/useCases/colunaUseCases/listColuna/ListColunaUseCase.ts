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

    async getColunaByTableName(table: string) {
        const data = await client.$queryRaw`
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
        if (!data) {
            throw new Error("Sem de Colunas do Sistema");
        };
        return data;
    }
};