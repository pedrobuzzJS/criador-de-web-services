import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

export default class UpdateWebServiceRoutesController {
    static async handle(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const updateWebServiceRoutes = await client.webServiceRoutes.update({
                where: {
                    id: Number(objJson.id)
                },
                data: {
                    webservice_id: Number(objJson.webservice_id),
                    werbservoceobj_id: Number(objJson.werbservoceobj_id),
                }
            });
            if (updateWebServiceRoutes) {
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