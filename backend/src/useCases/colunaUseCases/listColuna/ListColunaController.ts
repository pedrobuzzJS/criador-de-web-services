import { Request, Response } from "express";
import { ListColunaUseCase } from "./ListColunaUseCase";
import { CreateColunaUseCase } from "../createColuna/CreateColunaUseCase";

export default class ListColunaController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listColunaUseCase = new ListColunaUseCase();
        if (id) {
            const data = await listColunaUseCase.getById(Number(id));
            return response.json(data);
        };
        const data = await listColunaUseCase.getAll();
        const cre = new CreateColunaUseCase();

        // await cre.generateColumnDic();

        return response.json(data);
    };
};