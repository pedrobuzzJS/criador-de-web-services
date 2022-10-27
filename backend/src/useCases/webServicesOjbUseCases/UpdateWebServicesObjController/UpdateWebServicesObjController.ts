import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

export default class UpdateWebServicesObjController {
    static async handle(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const updateWebServiceObj = await client.webServiceObj.update({
                where: {
                    id: Number(objJson.id)
                },
                data: {
                    obj: objJson.obj,
                    sql: objJson.sql,
                    webservice_id: Number(objJson.webservice_id),
                    versao: Number(objJson.versao),
                    status_id: Number(objJson.status_id),
                    table_id: 98,
                }
            });
            if (updateWebServiceObj) {
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