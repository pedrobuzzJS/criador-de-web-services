import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

export default class CreateWebServiceRoutesController {
    static async handle(request: Request, response: Response) {
        const { data } = request.body;
        const objJson = JSON.parse(data);
        try {
            const webServiceRoutes = await client.webServiceRoutes.create({
                data: {
                    webservice_id: Number(objJson.webservice_id),
                    werbservoceobj_id: Number(objJson.werbservoceobj_id),
                    route: objJson.route,
                }
            });
            if (webServiceRoutes) {
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