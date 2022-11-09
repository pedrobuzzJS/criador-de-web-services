import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";
import ObjToSqlController from "../../../modules/ObjToSqlController";

export default class CreateWebServicesObjController {
    static async handle(request: Request, response: Response) {
        const { data } = await request.body;
        const objJson = await JSON.parse(data);
        const objToSqlController = new ObjToSqlController();
        try {
            const webServiceObj = await client.webServiceObj.create({
                data: {
                    obj: data,
                    sql: "objJson.sql",
                    webservice_id: Number(objJson.webServiceId),
                    versao: 1,
                    status_id: 1,
                    table_id: Number(objJson.tableId),
                }
            });
            await objToSqlController.ObjToSql(JSON.parse(webServiceObj.obj), webServiceObj.id);
            if (webServiceObj) {
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