import { client } from "../../../infra/prisma/client";
import { ListTableUseCase } from "../../tabelaUseCases/listTable/ListTableUseCase";
import { ListColunaUseCase } from "../listColuna/ListColunaUseCase";
export class CreateColunaUseCase {
    async createColumn(table_id: number, columns: any[]) {
        columns.forEach(async (column) => {
            await client.colunas.create({
                data: {
                    nome: column.column_name,
                    tipo: column.data_type,
                    posicao: column.ordinal_position,
                    nulo: column.is_nullable,
                    char_max: column.character_maximum_length,
                    is_identity: column.is_identity,
                    is_self_referencing: column.is_self_referencing,
                    is_updatable: column.is_updatable,
                    pk: "0",
                    fk: "0",
                    tabela_id: table_id,
                    // permissao: 1,
                    status_id: 1,
                }
            });
        });
    };

    async generateColumnDic() {
        let tables: any[] = [];
        let colunas: any[] = [];
        const listTableUseCase = new ListTableUseCase();
        const listColunaUseCase = new ListColunaUseCase();
        tables.push(await listTableUseCase.getAll());
        tables = tables[0];
        for (let i = 0; i < tables.length; i++) {
            colunas.push(await listColunaUseCase.getColunaByTableName(tables[i].nome));
        }
        colunas.forEach(async (column) => {
            await this.createColumn(column.table_id, column.columns);
        });        
    };
};