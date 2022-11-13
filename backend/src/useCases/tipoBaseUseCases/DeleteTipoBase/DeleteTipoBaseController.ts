import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

class DeleteTipoBaseController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        try {
            if (id) {
                const deleteTipoBase = await client.tipoBases.delete({
                    where: {
                        id: Number(id)
                    }
                })
                if (deleteTipoBase) {
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

export default DeleteTipoBaseController;