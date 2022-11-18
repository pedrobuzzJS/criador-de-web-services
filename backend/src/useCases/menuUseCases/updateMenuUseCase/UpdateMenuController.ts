import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

class UpdateMenuController {
    static async handle(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        await console.log(objJson);
        try {
            const updateMenu = await client.menus.update({
                where: {
                    id: Number(objJson.id)
                },
                data: {
                    id: Number(objJson.id),
                    nome: objJson.nome,
                    parametros: objJson.parametros,
                    rota: objJson.rota,
                    icone: objJson.icone,
                    pai_id: objJson.pai_id,
                    component: objJson.component,
                    possuifilhos: true,
                    ordem: Number(objJson.ordem),
                    desabilitado: false,
                    status_id: Number(objJson.status_id),
                }
            });
            if (updateMenu) {
                return response.json(
                    {
                        "msg" : "Successes"
                    }
                );
            };
        } catch (error) {
            return response.status(500).json({
                message: error
            });
        };
    };
};

export default UpdateMenuController;