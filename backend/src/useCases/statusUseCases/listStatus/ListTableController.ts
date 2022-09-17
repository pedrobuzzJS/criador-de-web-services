import { Request, Response } from "express";
import { ListStatusUseCase } from './ListStatusUseCase';

class ListStatusController {

    static async handle(request: Request, response: Response) {
        // console.log(request.query);

        // const { objFilters } = request.query;

        const listStatusController = new ListStatusUseCase();

        const data = await listStatusController.getAll();

        return response.json(data);
    }
}

export default ListStatusController;