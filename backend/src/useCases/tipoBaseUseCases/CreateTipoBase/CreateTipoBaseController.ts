import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

class CreateTipoBaseController {
    static async handle(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const tipoBase = await client.tipoBases.create({
                data: {
                    nome: objJson.nome,
                    icone: objJson.icone,
                    status_id: Number(objJson.status_id),
                }
            });
            if (tipoBase) {
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

export default CreateTipoBaseController;