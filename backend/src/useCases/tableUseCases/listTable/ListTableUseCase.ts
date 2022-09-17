import { client } from "../../../infra/prisma/client";

export class ListTableUseCase {

    async getAll() {
        
        // const data = await client.$queryRaw`
        //     select table_catalog, table_schema, table_name from information_schema.tables where table_schema = 'public'
        // `;

        // const data = await client.$queryRaw`
        //     select table_catalog, table_schema, table_name from information_schema.tables
        // `;
        const data = await client.tabelas.findMany(
            {
                orderBy: {
                    id: 'asc'
                }
            }
        )

        if (!data) {
            throw new Error("Sem Retorno da Tabelas do Sistema");
        }

        return data;
    }

}