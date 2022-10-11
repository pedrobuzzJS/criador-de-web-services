import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";
import { CreateStatusUseCase } from './CreateStatusUseCase';
class CreateStatusController {
    static async handle(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const status = await client.status.create({
                data: {
                    nome: objJson.nome,
                    descricao: objJson.descricao 
                }
            });
            if (status) {
                return response.json(
                    {
                        "msg" : "Successes"
                    }
                );
            }
        } catch (error) {
            return response.json(
                {
                    "msg" : error
                }
            );
        };
    };
};

export default CreateStatusController;