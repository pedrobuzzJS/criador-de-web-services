import { Request, Response } from "express";
import { ListCoresUseCase } from "./ListCoresUseCase";

export default class ListCoresController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listCoresUseCase = new ListCoresUseCase();
        if (id) {
            const data = await listCoresUseCase.getById(Number(id));
            return response.json(data);
        };
        const data = await listCoresUseCase.getAll();
        return response.json(data);
    };
};