import { Request, Response } from "express";
import { CreateWebServicesUseCase } from "./CreateWebServicesUseCase";
import { client } from "../../../infra/prisma/client";

export default class CreateWebServicesController {
    static async handle(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const webservices = await client.webService.create({
                data: {
                    nome: objJson.nome,
                    descricao: objJson.descricao,
                    prover: false,
                    consumir: true,
                    varsao: Number(objJson.varsao),
                    status_id : Number(objJson.status_id),
                }
            });
            if (webservices) {
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