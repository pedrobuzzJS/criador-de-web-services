import { client } from "../../../infra/prisma/client";

export class ListTipoWebServiceUseCase {

    async getAll(objFilters?: any) {
        
        const data = await client.tipoWebService.findMany({
            select: {
                id: true,
                nome: true,
                sigla: true,
                descricao: true,
                status_id: true,
            },
            orderBy: {
                id: 'asc'
            }
        });

        if (!data) {
            throw new Error("Sem Retorno de Tipo de WebService do Sistema");
        };

        return data;
    };
};