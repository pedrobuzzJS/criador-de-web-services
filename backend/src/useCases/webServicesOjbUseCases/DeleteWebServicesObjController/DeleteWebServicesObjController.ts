import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

export default class DeleteWebServicesObjController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        try {
            if (id) {
                const deleteWebServiceObj = await client.webServiceObj.delete({
                    where: {
                        id: Number(id)
                    }
                })
                if (deleteWebServiceObj) {
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