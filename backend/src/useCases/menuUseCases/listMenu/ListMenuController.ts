import { Request, Response } from "express";
import { ListMenuUseCase } from "./ListMenuUseCase";

class ListMenuController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listTableUseCase = new ListMenuUseCase();
        if (id) {
            const data = await listTableUseCase.getById(Number(id));
            return response.json(data);
        };
        const data = await listTableUseCase.getAll();
        return response.json(data);
    };
};

export default ListMenuController;