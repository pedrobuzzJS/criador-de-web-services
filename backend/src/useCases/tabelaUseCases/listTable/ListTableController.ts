import { Request, Response } from "express";
import { ListTableUseCase } from "./ListTableUseCase";
import { CreateTableUseCase } from './../createTable/CreateTableUseCase';

class ListTableController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listTableUseCase = new ListTableUseCase();
        if (id) {
            const data = await listTableUseCase.getById(Number(id));
            return response.json(data);
        };
        const data = await listTableUseCase.getAll();
        const tt = new CreateTableUseCase();
        // tt.generateTableDictionari();

        return response.json(data);
    };
};

export default ListTableController;