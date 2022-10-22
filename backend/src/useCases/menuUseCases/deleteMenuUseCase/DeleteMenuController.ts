import { Request, Response } from "express";
import { client } from "../../../infra/prisma/client";

class DeleteMenuController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        try {
            if (id) {
                const deleteMenu = await client.menus.delete({
                    where: {
                        id: Number(id)
                    }
                })
                if (deleteMenu) {
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

export default DeleteMenuController;