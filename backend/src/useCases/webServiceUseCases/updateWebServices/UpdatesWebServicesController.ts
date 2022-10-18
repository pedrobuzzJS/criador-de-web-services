import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

export default class UpdateWebServicesController {
    static async handle(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const updateStatus = await client.webService.update({
                where: {
                    id: Number(objJson.id)
                },
                data: {
                    nome: objJson.nome,
                    descricao: objJson.descricao,
                    prover: objJson.prover,
                    consumir: objJson.consumir,
                    varsao: objJson.varsao,
                    status_id : objJson.status_id,
                }
            });
            if (updateStatus) {
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