import { Request, Response } from "express";
import { ListMenuUseCase } from "./ListMenuUseCase";

class ListMenuController {

    static async handle(request: Request, response: Response) {

        const listTableUseCase = new ListMenuUseCase();

        const data = await listTableUseCase.execute();

        return response.json(data);
    }
}

export default ListMenuController;