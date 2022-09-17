import { client } from "../../../infra/prisma/client";

export class ListStatusUseCase {

    async getAll(objFilters?: any) {

        // await console.log(objFilters.id);
        
        const data = await client.status.findMany({
            select: {
                id: true,
                nome: true,
                descricao: true
            },
            // where: {
            //     id: 1
            // },
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