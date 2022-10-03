import { client } from "../../../infra/prisma/client";

export class ListWebServicesObjUseCase {
    async getAll() {
        const data = await client.webServiceObj.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem Retorno do Sistema");
        };
        return data;
    };

    async getById(id?: number) {
        const data = await client.webServiceObj.findMany({
            where: {
                id: id
            },
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem Retorno do Sistema");
        };
        return data;
    };
};