import { Request, Response } from "express";
import { ListStatusUseCase } from './ListStatusUseCase';

class ListStatusController {

    static async handle(request: Request, response: Response) {

        const listStatusController = new ListStatusUseCase();

        const data = await listStatusController.execute();

        return response.json(data);
    }
}

export default ListStatusController;