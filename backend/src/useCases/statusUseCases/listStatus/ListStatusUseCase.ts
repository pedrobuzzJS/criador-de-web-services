import { client } from "../../../infra/prisma/client";

export class ListStatusUseCase {

    async execute() {
        
        const data = await client.status.findMany({
            select: {
                id: true,
                nome: true,
                descricao: true
            },
            orderBy: {
                id: 'asc'
            }
        });

        if (!data) {
            throw new Error("Sem Retorno de Status do Sistema");
        }

        return data;
    }

}