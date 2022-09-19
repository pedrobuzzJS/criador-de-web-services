import { Request, Response } from "express";
import { ListTableUseCase } from "./ListTableUseCase";

class ListTableController {

    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listTableController = new ListTableUseCase();
        if (id) {
            const data = await listTableController.getById(Number(id));
            return response.json(data);
        };
        const data = await listTableController.getAll();
        return response.json(data);
    };
};

export default ListTableController;