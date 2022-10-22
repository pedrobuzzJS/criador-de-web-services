import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

class CreateMenuController {
    static async handle(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const menu = await client.menus.create({
                data: {
                    nome: objJson.nome,
                    parametros: objJson.parametros,
                    rota: objJson.rota,
                    icone: objJson.icone,
                    pai_id: Number(objJson.pai_id),
                    component: objJson.component,
                    possuifilhos: false,
                    ordem: Number(objJson.ordem),
                    desabilitado: false,
                    papel: Number(objJson.papel),
                    permissao: Number(objJson.permissao),
                    status_id: Number(objJson.status_id),
                }
            });
            if (menu) {
                return response.json(
                    {
                        "msg" : "Successes"
                    }
                );
            }
        } catch (error) {
            return response.status(500).json({
                message: error
            });
        };
    };
};

export default CreateMenuController;