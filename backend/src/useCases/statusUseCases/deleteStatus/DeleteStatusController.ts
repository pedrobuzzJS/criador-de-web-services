import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

class DeleteStatusController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        try {
            if (id) {
                const deleteStatus = await client.status.delete({
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

export default DeleteStatusController;