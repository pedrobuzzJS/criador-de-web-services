import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

export default class DeleteWebServiceRoutesController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        try {
            if (id) {
                const deleteWebServiceRoutes = await client.webServiceRoutes.delete({
                    where: {
                        id: Number(id)
                    }
                })
                if (deleteWebServiceRoutes) {
                    return response.json(
                        {
                            "msg" : "Successes"
                        }
                    );
                };
            };
        } catch (error) {
            return response.status(500).json({
                message: error
            });
        };
    };
};