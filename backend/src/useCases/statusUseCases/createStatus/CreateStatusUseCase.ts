import { response } from 'express';
import { client } from "../../../infra/prisma/client";
export class CreateStatusUseCase {
    async create(dataObj : any) {
        try {
            const status = await client.status.create({
                data: {
                    nome: dataObj.nome,
                    descricao: dataObj.descricao 
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