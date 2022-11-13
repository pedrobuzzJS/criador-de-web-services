import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

class UpdateTipoBaseController {
    static async handle(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const updateTipoBase = await client.tipoBases.update({
                where: {
                    id: Number(objJson.id)
                },
                data: {
                    nome: objJson.nome,
                    icone: objJson.icone,
                    status_id: Number(objJson.status_id),
                }
            });
            if (updateTipoBase) {
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

export default UpdateTipoBaseController;