import { Request, Response } from "express";
import { ListStatusUseCase } from './ListStatusUseCase';

class ListStatusController {

    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listStatusUseCase = new ListStatusUseCase();
        if (id) {
            const data = await listStatusUseCase.getById(Number(id));
            return response.json(data);
        };
        const data = await listStatusUseCase.getAll();
        return response.json(data);
    };
};

export default ListStatusController;