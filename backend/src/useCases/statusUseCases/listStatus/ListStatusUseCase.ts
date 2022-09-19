import { client } from "../../../infra/prisma/client";

export class ListStatusUseCase {
    async getAll() {
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
            throw new Error("Sem de Menus do Sistema");
        };
        return data;
    };

    async getById(id?: number) {
        const data = await client.status.findMany({
            select: {
                id: true,
                nome: true,
                descricao: true
            },
            where: {
                id: id
            },
            orderBy: {
                id: 'asc'
            }
        });
        if (!data) {
            throw new Error("Sem de Menus do Sistema");
        };
        return data;
    };
};