import { client } from "../../../infra/prisma/client";

export class ListWebServicesUseCase {
    async getAll() {
        const data = await client.webService.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem de webService do Sistema");
        };
        return data;
    };

    async getById(id?: number) {
        const data = await client.webService.findMany({
            where: {
                id: id
            }
        });
        if (!data) {
            throw new Error("Sem de webService do Sistema");
        };
        return data;
    };
};