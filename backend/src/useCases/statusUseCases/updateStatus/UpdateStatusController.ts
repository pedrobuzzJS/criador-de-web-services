import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

class UpdateStatusController {
    static async handle(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const updateStatus = await client.status.update({
                where: {
                    id: Number(objJson.id)
                },
                data: {
                    nome: objJson.nome,
                    descricao: objJson.descricao,
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
            return response.json(
                {
                    "msg" : "Fail"
                }
            );
        };
    };
};

export default UpdateStatusController;