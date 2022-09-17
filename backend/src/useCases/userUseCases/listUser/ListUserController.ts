import { ListUserUseCase } from './ListUserUseCase';
import { Request, Response } from "express";

class ListUserController {

    static async handle(request: Request, response: Response) {

        const listUserController = new ListUserUseCase();

        const data = await listUserController.getAll();

        return response.json(data);
    }
}

export default ListUserController;