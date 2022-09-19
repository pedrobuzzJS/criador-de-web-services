import { ListUserUseCase } from './ListUserUseCase';
import { Request, Response } from "express";

class ListUserController {

    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listUserUseCase = new ListUserUseCase();
        if (id) {
            const data = await listUserUseCase.getById(Number(id));
            return response.json(data);
        };
        const data = await listUserUseCase.getAll();
        return response.json(data);
    };
};

export default ListUserController;