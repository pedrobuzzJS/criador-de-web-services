import { client } from "../../../infra/prisma/client";

export class CreateTableUseCase {
    static async creatTables(data?: any) {
        const tables = client.tabelas.create({
            data: {
                id: 1,
                nome: "",
                scheme: "public",
                base_id: 1,
                permissao: 1,
                status_id: 1,
            }
        });
        return tables;
    };
};