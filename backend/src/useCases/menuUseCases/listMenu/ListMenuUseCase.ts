import { client } from "../../../infra/prisma/client";

export class ListMenuUseCase {

    async execute() {
        
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
                permissao: true,
                status_id: true,
                papel: true,
                possuifilhos: true,
                component: true
            },
            orderBy: {
                id: 'asc',
            }
        });

        if (!data) {
            throw new Error("Sem de Menus do Sistema");
        }

        return {data};
    }

}