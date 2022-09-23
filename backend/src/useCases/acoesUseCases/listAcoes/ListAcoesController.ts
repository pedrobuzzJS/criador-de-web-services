import { Request, Response } from "express";
import { ListAcoesUseCase } from "./ListAcoesUseCase";

export default class ListAcoesController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listAcoesUseCase = new ListAcoesUseCase();
        if (id) {
            const data = await listAcoesUseCase.getById(Number(id));
            return response.json(data);
        };
        const data = await listAcoesUseCase.getAll();
        return response.json(data);
    };
};