
import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

export default class DeleteWebServicesController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        try {
            if (id) {
                const deleteStatus = await client.webService.delete({
                    where: {
                        id: Number(id)
                    }
                })
                if (deleteStatus) {
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