import { Request, Response } from "express";
import { ListTableUseCase } from "./ListTableUseCase";

class ListTableController {

    static async handle(request: Request, response: Response) {

        const listTableUseCase = new ListTableUseCase();

        const data = await listTableUseCase.getAll();

        return response.json(data);
    }
}

export default ListTableController;