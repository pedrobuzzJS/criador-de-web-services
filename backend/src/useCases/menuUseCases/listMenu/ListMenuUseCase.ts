import { client } from "../../../infra/prisma/client";
export class ListMenuUseCase {
    async getAll() {
        const data = await client.menus.findMany({
            select: {
                id: true,
                nome: true,
                parametros: true,
                rota: true,
                icone: true,
                pai_id: true,
                ordem: true,
                desabilitado: true,
                status_id: true,
                possuifilhos: true,
                component: true
            },
            orderBy: {
                id: 'asc',
            }
        });
        if (!data) {
            throw new Error("Sem de Menus do Sistema");
        };
        return data;
    };

    async getById(id?: number) {
        const data = await client.menus.findMany({
            select: {
                id: true,
                nome: true,
                parametros: true,
                rota: true,
                icone: true,
                pai_id: true,
                ordem: true,
                desabilitado: true,
                status_id: true,
                possuifilhos: true,
                component: true
            },
            orderBy: {
                id: 'asc',
            },
            where: {
                id: id
            }
        });
        if (!data) {
            throw new Error("Sem de Menus do Sistema");
        };
        return data;
    };
};