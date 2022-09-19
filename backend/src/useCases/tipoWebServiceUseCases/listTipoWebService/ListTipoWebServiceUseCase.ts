import { client } from "../../../infra/prisma/client";

export class ListTipoWebServiceUseCase {

    async getAll() {
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
            throw new Error("Sem de Menus do Sistema");
        };
        return data;
    };

    async getById(id?: number) {
        const data = await client.tipoWebService.findMany({
            select: {
                id: true,
                nome: true,
                sigla: true,
                descricao: true,
                status_id: true,
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