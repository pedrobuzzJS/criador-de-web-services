import { client } from "../../../infra/prisma/client";
import { ListTableUseCase } from './../listTable/ListTableUseCase';
export class CreateTableUseCase {
    async creatTables(data?: any) {
        const tables = client.tabelas.create({
            data: {
                nome: data.table_name,
                scheme: data.table_schema,
                base_id: 1,
                status_id: 1,
            }
        });
        return tables;
    };
    
    async generateTableDictionari() {
        let tables: any[] = [];
        const listtableUseCase = new ListTableUseCase();
        tables.push(await listtableUseCase.getTable());
        tables = tables[0];

        tables.forEach(async (table) => {
            await this.creatTables(table);
        });
    };
};