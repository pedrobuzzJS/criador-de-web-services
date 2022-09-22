import { Request, Response } from "express";
import { ListRotasUseCase } from "./ListRotasUseCase";

export default class ListRotasController {
    static async handle(request: Request, response: Response) {
        const { id } = request.query;
        const listRotasUseCase = new ListRotasUseCase();
        if (id) {
            const data = await listRotasUseCase.getById(Number(id));
            return response.json(data);
        };
        const data = await listRotasUseCase.getAll();
        return response.json(data);
    };
};