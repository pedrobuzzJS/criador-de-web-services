import { client } from "../../../infra/prisma/client";

export class ListWebServiceRoutesUseCase {
    async getAll() {
        const data = await client.webServiceRoutes.findMany({
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
        const data = await client.webServiceRoutes.findMany({
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