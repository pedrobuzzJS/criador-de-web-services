import { client } from "../../infra/prisma/client";

export class ListTableUseCase {

    async execute() {
        
        const data = await client.$queryRaw`
            select table_catalog, table_schema, table_name from information_schema.tables where table_schema = 'public'
        `;

        if (!data) {
            throw new Error("Sem Retorno da Tabelas do Sistema");
        }

        return {data};
    }

}